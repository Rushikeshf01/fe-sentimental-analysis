"use client";

import React, { useState } from "react";
import Loader from "@/components/Loader";
import BulkAnalyzeInput from "./BulkAnalyzeInput";
import ReviewNumber from "./ReviewNumber";
import { BulkReviewOutputType } from "@/utils/types";
import ReviewPercentage from "./ReviewPercentage";
import ReviewAverageProbability from "./ReviewAverageProbability";

const BulkAnalyze = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [reviewNumber, setReviewNumber] = useState<BulkReviewOutputType>();
  const [reviewPercentage, setReviewPercentage] =
    useState<BulkReviewOutputType>();
  const [reviewAverageProbability, setReviewAverageProbability] =
    useState<BulkReviewOutputType>();

  return (
    <>
      {isApiCalling && <Loader />}
      <div className="grid grid-cols-2 gap-4">
        <BulkAnalyzeInput
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
          setReviewNumber={setReviewNumber}
          setReviewPercentage={setReviewPercentage}
          setReviewAverageProbability={setReviewAverageProbability}
          setIsApiCalling={setIsApiCalling}
        />
        <ReviewNumber reviewNumber={reviewNumber} />
        <ReviewPercentage reviewPercentage={reviewPercentage} />
        <ReviewAverageProbability
          reviewAverageProbability={reviewAverageProbability}
        />
      </div>
    </>
  );
};

export default BulkAnalyze;
