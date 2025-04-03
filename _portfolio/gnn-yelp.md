---
title: "Yelp Restaurant Recommendations with GNNs"
excerpt: "A Graph Neural Network (GNN) based recommendation system for restaurants using the Yelp dataset."
collection: portfolio
type: personal
category: Machine Learning
permalink: /portfolio/gnn-yelp/
date: 2023-09-20
image: /images/gnn-yelp.jpg
technologies:
  - PyTorch
  - PyTorch Geometric
  - Graph Neural Networks
  - Recommendation Systems
  - Python
github_link: https://github.com/apratim-mishra/gnn_yelp
---

## Project Overview

This project implements a recommendation system for restaurants using the Yelp dataset and Graph Neural Networks (GNNs). The system leverages heterogeneous graph neural networks to model user-restaurant interactions and make personalized restaurant recommendations.

## Features Implemented

* **Heterogeneous Graph Construction** - Built from user-restaurant interactions and metadata
* **Multiple GNN Models** - Implemented baseline GraphSAGE, improved model with GAT and Transformer layers, and hard sampling model
* **Comprehensive Evaluation** - Measured performance using Recall@K, Precision@K, MAP, and AUC
* **Comparative Analysis** - Benchmarked different loss functions (BPR vs. BCE) and model architectures

## Implementation Details

The recommendation system includes several key components:

1. **Data Processing Pipeline** - Processes raw Yelp JSON data into a heterogeneous graph
2. **Model Architectures**:
   * Baseline: GraphSAGE-based GNN with simple edge prediction
   * Improved: Enhanced GNN with GAT, Transformer layers, and skip connections
   * Hard Sampling: Improved model with hard negative sampling
3. **Training Framework** - Supports different loss functions and evaluation metrics
4. **Evaluation Suite** - Comprehensive testing and performance analysis tools

## Learning Outcomes

This project allowed me to:

* Gain expertise in implementing GNNs for recommendation systems
* Understand the challenges of processing large-scale heterogeneous graphs
* Develop skills in comparative model analysis and evaluation
* Implement advanced training techniques like hard negative sampling

## GitHub Repository

The complete source code is available on my GitHub repository: [github.com/apratim-mishra/gnn_yelp](https://github.com/apratim-mishra/gnn_yelp) 