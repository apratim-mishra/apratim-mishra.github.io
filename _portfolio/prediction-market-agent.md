---
title: "Prediction Market Agent"
excerpt: "An AI-powered prediction market agent built with Coinbase AgentKit for the Base Sepolia testnet. Create markets, place bets, and interact with smart contracts through natural language."
collection: portfolio
type: personal
category: AI/Web3
permalink: /portfolio/prediction-market-agent/
date: 2024-11-01
image: /images/prediction-market.jpg
technologies:
  - Python
  - LangChain
  - LangGraph
  - FastAPI
  - Solidity
  - React
  - TypeScript
github_link: https://github.com/apratim-mishra/prediction-market-agent
---

## Project Overview

Prediction Market Agent is an AI-powered system that enables users to interact with prediction markets on the Base Sepolia testnet through natural language. Built with Coinbase AgentKit, the agent can create markets, place bets, check prices, and claim winnings—all through conversational commands.

## Key Features

| Feature | Description |
|---------|-------------|
| **AI Agent** | Natural language interface powered by LangChain & LangGraph |
| **Smart Contracts** | Full prediction market implementation on Base Sepolia |
| **CDP Wallet** | Seamless Coinbase Developer Platform integration |
| **Price Oracle** | Real-time prices from CoinGecko, Coinbase, Pyth Network |
| **Market Operations** | Create markets, bet UP/DOWN, claim winnings |
| **Multi-LLM Support** | Compatible with OpenAI GPT-4 and GLM-4.6 |

## Architecture

The project follows a modular architecture with three main components:

```
prediction-market-agent/
├── agent/                      # Python agent + API
│   ├── src/
│   │   ├── agent.py            # Main agent class
│   │   ├── api.py              # FastAPI REST API
│   │   ├── chatbot.py          # Interactive CLI
│   │   ├── contract_interface.py
│   │   ├── market_actions.py   # LangChain tools
│   │   └── price_oracle.py     # Multi-source prices
│   └── tests/                  # Test suite (26 tests)
├── frontend/                   # React + TypeScript UI
└── contracts/                  # Solidity contracts
```

## Technical Implementation

### Agent Layer
* **LangChain & LangGraph** for agent reasoning and tool orchestration
* **Custom tools** for market operations (create, bet, resolve, claim)
* **Multi-source price oracle** integrating CoinGecko, Coinbase, and Pyth Network
* **CDP Wallet integration** for seamless blockchain transactions

### Smart Contracts
* **PredictionMarket.sol** deployed on Base Sepolia
* Market creation with configurable target prices and durations
* UP/DOWN betting mechanism with 2% platform fee
* Automated resolution and winnings distribution

### Frontend
* **React + TypeScript** for modern UI
* Real-time market data and wallet status
* Interactive chat interface for agent communication

## Usage Examples

```
> What is my wallet address?
> What is my wallet balance?
> Request testnet funds from the faucet
> What's the current price of BTC?
> Get info for market 0
> Place a 0.0001 ETH bet on market 0 predicting UP
> Claim winnings from market 0
```

## Smart Contract Details

| Parameter | Value |
|-----------|-------|
| Minimum Bet | 0.00001 ETH |
| Platform Fee | 2% |
| Max Duration | 168 hours (1 week) |
| Network | Base Sepolia Testnet |

## Learning Outcomes

This project allowed me to:

* Build production-ready AI agents with LangChain and LangGraph
* Develop and deploy Solidity smart contracts on L2 networks
* Integrate blockchain wallets with AI-powered interfaces
* Implement multi-source price oracles for financial data
* Create full-stack applications with React and FastAPI

## GitHub Repository

The complete source code, including agent, contracts, and frontend, is available on GitHub: [github.com/apratim-mishra/prediction-market-agent](https://github.com/apratim-mishra/prediction-market-agent)

