"use client";

import * as Sentry from "@sentry/nextjs";
// import { domAnimation } from "framer-motion";
import { useEffect } from "react";

function createWidget() {
    return Sentry.getFeedback()?.createWidget();
}

function useFeedbackWidget() {
    useEffect(() => {
        createWidget();
    }, []);
}

export default function SentryFeedbackWidget() {
    useFeedbackWidget();
    return null;
}