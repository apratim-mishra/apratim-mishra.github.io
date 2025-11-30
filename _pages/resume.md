---
layout: archive
title: "Resume"
permalink: /resume/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="resume-header">
  <h1>Apratim Mishra</h1>
  <p>Applied Machine Learning Ph.D. professional with expertise in developing and deploying petabyte-scale machine learning, NLP, and LLM-based models.</p>
  <div class="resume-download">
    <a href="{{ base_path }}/files/Resume_Apratim.pdf" class="btn btn--primary"><i class="fas fa-download"></i> Download Resume (PDF)</a>
  </div>
</div>

<div class="resume-section">
  <h2><i class="fas fa-graduation-cap"></i> Education</h2>
  <div class="resume-item">
    <h3>Ph.D. in Information Sciences</h3>
    <p>University of Illinois at Urbana-Champaign (UIUC) <span class="date">Aug 2019 – June 2025</span></p>
  </div>
  <div class="resume-item">
    <h3>Master's in Energy and Environmental Policy</h3>
    <p>University of Delaware <span class="date">Aug 2016 – May 2018</span></p>
  </div>
  <div class="resume-item">
    <h3>Bachelor's in Chemical Engineering</h3>
    <p>Birla Institute of Technology and Science (BITS) Pilani <span class="date">Aug 2012 – May 2016</span></p>
  </div>
</div>

<div class="resume-section">
  <h2><i class="fas fa-briefcase"></i> Work Experience</h2>
  
  <div class="resume-item">
    <h3>Machine Learning Engineer</h3>
    <p class="organization">Verizon, Irving, TX <span class="date">July 2025 – Present</span></p>
    <ul>
      <li>Developed a unified enterprise agent platform for domain teams to compose, version, and deploy multi-agent workflows across network, server, and business applications. Components include an Agent Builder (drag-and-drop node editor), a Connector Registry for data and tool integration (APIs, vector databases, RAG endpoints), and a ChatKit UI toolkit for portals. (AWS Bedrock & SageMaker, ECS/Fargate, EKS, AgentCore, FastAPI, Postgres + Redis memory stores)</li>
      <li>Designed and implemented end-to-end LLM fine-tuning and inference pipelines tailored for network/server diagnostics and application-level automation. Fine-tuned instruction models via SFT and RFT on domain logs, KB transcripts, and incident-ticket datasets (using SageMaker with DeepSpeed & Accelerate, LoRA/PEFT for tuning). Deployed quantized models with ONNX Runtime and bitsandbytes into Kubernetes (EKS) via Triton/TGI, with autoscaling and full CI/CD. Achieved +24% training throughput and –15% p95 latency.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Graduate Research Assistant</h3>
    <p class="organization">University of Illinois Urbana-Champaign, Champaign, IL <span class="date">June 2024 – May 2025</span></p>
    <ul>
      <li>Parsed 15M PubMed abstracts on Databricks with PySpark to extract features (NER and Named Disambiguation). Trained LLM models with Python/PyTorch, raising F1 by 12% for 'hype' detection, producing a dataset downloaded 300+ times.</li>
      <li>Developed a hybrid citation recommendations system combining GNN-based link prediction with LLM-derived semantic embeddings (25% lift over BM25). Deployed on AWS SageMaker (real-time or serverless) via Airflow orchestration.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Data Science Intern (Applied ML)</h3>
    <p class="organization">AstraZeneca, Gaithersburg, MD <span class="date">May 2023 – Aug 2023</span></p>
    <ul>
      <li>Improved protein–property prediction F1 by 10% by training transformer-based LLM models on A100 multi-GPUs (Slurm) and fine-tuning with parameter-efficient fine-tuning techniques (LoRA) and optimization tools (DeepSpeed, Accelerate).</li>
      <li>Cut model retraining time by 30% by refactoring ETL in PySpark and Spark SQL and caching intermediate parquet layers.</li>
      <li>Deployed a TorchServe REST microservice via SageMaker that handles ~1K predictions per day in production; tracked experiments with MLflow and delivered zero-downtime updates through GitHub Actions.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>NLP Engineer Intern</h3>
    <p class="organization">The Cline Centre for Advanced Social Research, Champaign, IL <span class="date">May 2021 – Dec 2021</span></p>
    <ul>
      <li>Boosted entity-quotation extraction precision by 18% fine-tuning BERT and XLNet with hard-negative mining.</li>
      <li>Processed 250M petabytes of data (news articles) on a 20-node Apache Spark cluster (clustering to segment articles); reduced pipeline cost by 25% by migrating to spot instances and Dockerized Airflow tasks.</li>
      <li>Fine-tuned scaled data using Distributed Data Parallel (DDP) and served real-time inference with FastAPI orchestrated on Kubernetes, keeping P99 latency under 150 ms.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Data Analyst</h3>
    <p class="organization">Reliable Power Alternatives Corporation, Garden City, NY <span class="date">June 2018 – Aug 2019</span></p>
    <ul>
      <li>Saved 10% in energy procurement costs (≈$MM annually) by deploying PySpark-based load-forecasting models.</li>
      <li>Improved forecast MAE 15% via temporal cross-validation and SHAP-driven feature pruning, processing structured energy data with SQL and Snowflake data cloud analytics.</li>
      <li>Built Tableau dashboards consumed weekly by ~4-8 executives; reduced manual reporting hours by 30%.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Research Intern</h3>
    <p class="organization">Delaware Army National Guard, Wilmington, DE <span class="date">Sep 2017 – May 2018</span></p>
    <ul>
      <li>Raised time-series accuracy by 15% in load forecasting using time-series models (ARIMA, XGBoost, LightGBM, and LSTM).</li>
      <li>Verified gains with rolling t-tests (p < 0.01) and presented statistical findings to a 12-member energy task force.</li>
    </ul>
  </div>
</div>

<div class="resume-section">
  <h2><i class="fas fa-laptop-code"></i> Technical Skills</h2>
  
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Programming & Analytics</h3>
      <ul>
        <li><strong>Languages:</strong> Python (Pandas, NumPy, Scikit-learn, NLTK), SQL, NoSQL, R, TypeScript, Node.js, Go</li>
        <li><strong>Deep Learning:</strong> PyTorch, TensorFlow</li>
      </ul>
    </div>
    
    <div class="skill-category">
      <h3>Machine Learning & LLMs</h3>
      <ul>
        <li><strong>Frameworks:</strong> Transformers, LiteLLM, GPT models (Claude), PySpark</li>
        <li><strong>Agentic AI:</strong> MCP, LangChain, LangGraph, Unsloth</li>
      </ul>
    </div>
    
    <div class="skill-category">
      <h3>MLOps & Tools</h3>
      <ul>
        <li><strong>Experiment Tracking:</strong> W&B, MLflow</li>
        <li><strong>Vector DBs:</strong> FAISS, Pinecone, Weaviate</li>
        <li><strong>Optimization:</strong> DeepSpeed, ONNX, TensorRT</li>
        <li><strong>Infrastructure:</strong> Kubeflow, OpenAI SDK, vLLM, MongoDB</li>
      </ul>
    </div>
    
    <div class="skill-category">
      <h3>Big Data & Cloud</h3>
      <ul>
        <li><strong>AWS:</strong> EC2, Lambda, SageMaker, Beam, Bedrock, IAM, Step Functions</li>
        <li><strong>GCP:</strong> BigQuery, Vertex AI</li>
        <li><strong>Data:</strong> PySpark, Snowflake, Databricks</li>
      </ul>
    </div>
  </div>
</div>

<div class="resume-section">
  <h2><i class="fas fa-project-diagram"></i> Selected Projects</h2>
  
  <div class="resume-item">
    <h3>Notion Agentic AI Assistant</h3>
    <p>Designed a RAG-based semantic search system using LangChain and FAISS with OpenAI/HuggingFace SDKs for LLM-based retrieval, ranking, and generation. Automated serverless deployment and LLMOps pipelines for end-to-end ingestion, vectorization, and response generation.</p>
  </div>
  
  <div class="resume-item">
    <h3>Sound AI</h3>
    <p>Built an end-to-end song-generating platform based on topics via web search, lyric writing, and music synthesis. Utilized CrewAI to orchestrate multi-AI agents (Suno AI) and React, using MLOps practices for versioning and deployment.</p>
  </div>
  
  <div class="resume-item">
    <h3>PartSelect Chat Agent</h3>
    <p>Architected a dual-mode RAG-based AI assistant for appliance parts with FastAPI, WebSockets, and React. The multi-agent mode adds triage, specialist agents, hallucination guardrails, and function-calling tools for part search, compatibility, and troubleshooting. Implemented DeepSeek-to-OpenAI model fallback and Docker-based CI/CD.</p>
  </div>
</div>

<style>
  .resume-header {
    text-align: center;
    margin-bottom: 2em;
    border-bottom: 2px solid #f2f3f3;
    padding-bottom: 1em;
  }
  
  .resume-header p {
    color: #666;
    max-width: 800px;
    margin: 0 auto 1em;
    line-height: 1.6;
  }
  
  .resume-download {
    margin: 1.5em 0;
  }
  
  .resume-section {
    margin-bottom: 2em;
    border-bottom: 1px solid #f2f3f3;
    padding-bottom: 1em;
  }
  
  .resume-section h2 {
    color: #494e52;
    border-bottom: 1px solid #f2f3f3;
    padding-bottom: 0.5em;
  }
  
  .resume-item {
    margin-bottom: 1.5em;
  }
  
  .resume-item h3 {
    margin-bottom: 0.25em;
    color: #494e52;
  }
  
  .organization {
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  
  .date {
    font-style: italic;
    color: #646769;
    float: right;
  }
  
  .resume-item ul {
    margin-top: 0.5em;
    padding-left: 1.5em;
  }
  
  .resume-item li {
    margin-bottom: 0.5em;
    line-height: 1.5;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5em;
  }
  
  .skill-category {
    background-color: #f8f9fa;
    padding: 1em;
    border-radius: 5px;
  }
  
  .skill-category h3 {
    margin-top: 0;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }
  
  .skill-category ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0.5em;
  }
  
  .skill-category li {
    margin-bottom: 0.5em;
  }
  
  .btn--primary {
    display: inline-block;
    padding: 0.75em 1.5em;
    background-color: #52adc8;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    transition: background-color 0.3s ease;
  }
  
  .btn--primary:hover {
    background-color: #3d8ca7;
    color: #fff;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .date {
      float: none;
      display: block;
      margin-top: 0.25em;
    }
    
    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
