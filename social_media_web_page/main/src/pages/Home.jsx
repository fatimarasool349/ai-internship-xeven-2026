import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import InputField from "../components/InputField";
import FileUploader from "../components/FileUploader";
import GenerateButton from "../components/GenerateButton";
import LoadingSpinner from "../components/LoadingSpinner";
import OutputCard from "../components/OutputCard";
import StatusBadge from "../components/StatusBadge";
import ErrorAlert from "../components/ErrorAlert";
import Footer from "../components/Footer";
import axios from "axios";
import { Building2, FileText, BriefcaseBusiness } from "lucide-react";

import { generateContent, parseApiError } from "../services/api";
import {
  normalizeCrewStatus,
  extractCrewOutput,
  mapTaskToLoadingStage,
} from "../utils/crewaiHelpers";

const LOADING_STAGES = [
  { message: "Uploading document...", progress: 10, status: "uploading" },
  { message: "Initializing CrewAI...", progress: 20, status: "initializing" },
  {
    message: "Running Industry Trend Researcher...",
    progress: 35,
    status: "running",
  },
  {
    message: "Running Engagement Analyzer...",
    progress: 50,
    status: "running",
  },
  {
    message: "Running Brand Knowledge Retriever...",
    progress: 65,
    status: "running",
  },
  { message: "Running Content Creator...", progress: 80, status: "running" },
  { message: "Generating final response...", progress: 95, status: "running" },
];

const POLL_INTERVAL_MS = 3000;
const MAX_POLL_ATTEMPTS = 200; // ~10 minutes

export default function Home() {
  const [brandName, setBrandName] = useState("");
  const [industry, setIndustry] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [generatedContent, setGeneratedContent] = useState("");
  const [error, setError] = useState(null);

  const [validationErrors, setValidationErrors] = useState({});
  const [loadingStage, setLoadingStage] = useState(0);

  const pollingRef = useRef(null);
  const stageTimerRef = useRef(null);

  const isFormValid = brandName.trim() && industry.trim() && selectedFile;

  const clearStageTimer = useCallback(() => {
    if (stageTimerRef.current) {
      clearInterval(stageTimerRef.current);
      stageTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearStageTimer();
    };
  }, [clearStageTimer]);

  const validateForm = () => {
    const errors = {};
    if (!brandName.trim()) errors.brandName = "Brand Name is required.";
    if (!industry.trim()) errors.industry = "Industry is required.";
    if (!selectedFile)
      errors.file = "Please upload a Brand Knowledge document.";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const startLoadingAnimation = () => {
    setLoadingStage(0);
    stageTimerRef.current = setInterval(() => {
      setLoadingStage((prev) => {
        if (prev >= LOADING_STAGES.length - 1) return prev;
        return prev + 1;
      });
    }, 5000);
  };

  const runGeneration = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setGeneratedContent("");
    startLoadingAnimation();

    try {
      setStatus("uploading");
      setLoadingStage(0);

      const formData = new FormData();
      formData.append("industry", industry);
      formData.append("brand_name", brandName);
      formData.append("brand_file", selectedFile);

      setStatus("running");
      setLoadingStage(2);

      const response = await axios.post(
        "http://localhost:8000/generate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(response.data);

      clearStageTimer();
      setLoadingStage(LOADING_STAGES.length - 1);
      setStatus("success");

      if (!response.data.content) {
        throw new Error("No content returned from the backend.");
      }

      setGeneratedContent(response.data.content);
    } catch (err) {
      clearStageTimer();
      setStatus("failed");
      setError(parseApiError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setGeneratedContent("");
    setStatus("idle");
    setError(null);
  };

  const currentStage = LOADING_STAGES[loadingStage] || LOADING_STAGES[0];
  console.log("loading:", loading);
  console.log("generatedContent:", generatedContent);
  console.log("status:", status);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/20">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        {" "}
        <Header />
        <main className="mt-8 space-y-7 ">
          <div className="p-8 space-y-8 bg-white border shadow-lg rounded-3xl border-slate-100">
            {" "}
            <div className="flex items-center justify-between">
              {/* <FileText className="text-blue-600" size={22}/> */}

              <h2 className="text-lg font-semibold text-gray-900">
                Content Details
              </h2>
              <StatusBadge status={loading ? currentStage.status : status} />
            </div>
            <InputField
              label="Brand Name"
              placeholder="Enter your brand name"
              value={brandName}
              icon={<Building2 size={18} />}
              onChange={(val) => {
                setBrandName(val);
                if (validationErrors.brandName) {
                  setValidationErrors((prev) => ({ ...prev, brandName: null }));
                }
              }}
              error={validationErrors.brandName}
              disabled={loading}
            />
            <InputField
              label="Industry"
              placeholder="Healthcare, Technology, Education..."
              value={industry}
              icon={<BriefcaseBusiness size={18} />}
              onChange={(val) => {
                setIndustry(val);
                if (validationErrors.industry) {
                  setValidationErrors((prev) => ({ ...prev, industry: null }));
                }
              }}
              error={validationErrors.industry}
              disabled={loading}
            />
            <FileUploader
              selectedFile={selectedFile}
              onFileSelect={(file) => {
                setSelectedFile(file);
                if (validationErrors.file) {
                  setValidationErrors((prev) => ({ ...prev, file: null }));
                }
              }}
              error={validationErrors.file}
              disabled={loading}
            />
            <GenerateButton
              onClick={runGeneration}
              disabled={!isFormValid}
              loading={loading}
            />
          </div>

          {loading && (
            <div className="p-8 border border-gray-100 shadow-lg bg--white rounded-3xl shadow-gray-200/50 sm:p-8">
              <LoadingSpinner
                message={currentStage.message}
                progress={currentStage.progress}
              />
            </div>
          )}

          {error && !loading && (
            <ErrorAlert message={error} onRetry={runGeneration} />
          )}

          {generatedContent && !loading && (
            <OutputCard
              content={generatedContent}
              onRegenerate={runGeneration}
              onClear={handleClear}
              loading={loading}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
