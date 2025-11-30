---
title: "Realtime Phone Agent System"
excerpt: "AI phone agent powered by open-source models on Apple Silicon via MLX. Features inbound/outbound calls, speech-to-text with Whisper, TTS with Kokoro, and agent reasoning with LangGraph."
collection: portfolio
type: personal
category: AI/Voice
permalink: /portfolio/phone-calling-agent/
date: 2024-10-15
image: /images/phone-agent.jpg
technologies:
  - FastAPI
  - LangGraph
  - MLX
  - Whisper
  - Kokoro
  - Pinecone
  - Twilio
github_link: https://github.com/apratim-mishra/phone-calling-agent
---

## Project Overview

Realtime Phone Agent System is an AI-powered phone agent that handles inbound and outbound calls with natural conversation capabilities. Built for Apple Silicon using MLX, the system combines speech-to-text, text-to-speech, and LLM-based reasoning to provide intelligent phone interactions.

## Key Features

* **Inbound & Outbound Calls** - Full Twilio integration for phone connectivity
* **Speech-to-Text** - Real-time transcription using Whisper (MLX-optimized)
* **Text-to-Speech** - Natural voice synthesis with Kokoro
* **Agent Reasoning** - Intelligent responses powered by LangGraph
* **Semantic Search** - Context retrieval via Pinecone vector database
* **Apple Silicon Optimized** - Leverages MLX for efficient on-device inference

## System Architecture

```
Phone → Twilio → FastAPI → Whisper → LangGraph → Kokoro → Response
                                         ↓
                                     Pinecone
```

### Component Breakdown

| Component | Technology |
|-----------|------------|
| API Server | FastAPI |
| Agent Framework | LangGraph |
| ML Runtime | MLX |
| Speech-to-Text | Whisper |
| Text-to-Speech | Kokoro |
| LLM Backend | Z.ai / OpenAI |
| Vector Database | Pinecone |
| Phone Integration | Twilio |

## Technical Implementation

### Voice Pipeline
1. **Audio Capture** - Twilio streams incoming audio in real-time
2. **Transcription** - Whisper (MLX) converts speech to text with low latency
3. **Agent Processing** - LangGraph orchestrates the conversation flow
4. **Context Retrieval** - Pinecone provides relevant information
5. **Response Generation** - LLM generates appropriate responses
6. **Voice Synthesis** - Kokoro converts text back to natural speech
7. **Audio Delivery** - Response streamed back through Twilio

### Agent Architecture
* **LangGraph State Machine** for conversation management
* **Tool calling** for external API integrations
* **Memory management** for context retention across turns
* **Fallback handling** for graceful error recovery

### MLX Optimization
* Optimized for Apple Silicon (M1/M2/M3)
* Efficient memory usage for local inference
* Low-latency processing for real-time conversation

## Quick Start

```bash
# Setup
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp env.example.txt .env

# Initialize
python scripts/setup_pinecone.py
python scripts/seed_data.py

# Run
uvicorn src.api.main:app --host 0.0.0.0 --port 8000

# Tunnel (for development)
ngrok http 8000
```

Configure Twilio webhook to: `https://your-domain.ngrok.io/twilio/voice`

## Use Cases

* **Customer Support** - Automated handling of common inquiries
* **Appointment Scheduling** - Voice-based booking and reminders
* **Information Hotlines** - 24/7 automated information services
* **Lead Qualification** - Initial screening of sales leads
* **Survey Collection** - Voice-based data collection

## Learning Outcomes

This project allowed me to:

* Build real-time voice AI systems with low latency requirements
* Integrate multiple ML models (STT, LLM, TTS) into a unified pipeline
* Optimize ML inference for Apple Silicon using MLX
* Work with telephony APIs (Twilio) for production voice applications
* Implement vector search for conversational context retrieval

## Documentation

| Document | Description |
|----------|-------------|
| PROJECT_OVERVIEW.md | Architecture and features |
| TECHNICAL_SPECIFICATIONS.md | Technical specs and API reference |
| PROJECT_STRUCTURE.md | Code organization |

## GitHub Repository

The complete source code is available on GitHub: [github.com/apratim-mishra/phone-calling-agent](https://github.com/apratim-mishra/phone-calling-agent)

