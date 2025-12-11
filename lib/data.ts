export const personalInfo = {
    name: "Sandeep Kumar",
    title: "Senior AI/ML Data Engineer",
    email: "your.email@example.com", // Placeholder as per request
    github: "https://github.com/Sandeepkumaramgothu",
    linkedin: "https://linkedin.com", // Placeholder
    about: "Senior AI/ML Data Engineer with 11+ years of experience in AI/ML, Data Engineering, and Cloud Solutions.",
    location: "New York, USA", // Assumed or generic
    resumeUrl: "/resume.pdf", // Placeholder
}

export const skills = {
    core: [
        "PyTorch", "TensorFlow", "Hugging Face Transformers",
        "LLM Fine-tuning (GPT, BERT, LLaMA, T5)",
        "MLOps (Jenkins, GitLab CI, Docker, Kubernetes)",
        "Cloud (AWS, Azure, GCP)",
        "Big Data (Spark, Databricks, Snowflake)",
        "Vector DBs (Pinecone, Weaviate, Milvus)",
        "NLP (LangChain, RAG)",
        "API (FastAPI, Flask, GraphQL)",
        "Full Stack (React, Vue, Angular)"
    ],
    categories: [
        {
            name: "AI & Machine Learning",
            skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LLMs", "NLP", "Computer Vision"]
        },
        {
            name: "Data Engineering",
            skills: ["Spark", "Databricks", "Snowflake", "Airflow", "Kafka", "ETL/ELT"]
        },
        {
            name: "Cloud & DevOps",
            skills: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Jenkins", "Terraform"]
        },
        {
            name: "Web & API",
            skills: ["Python", "Node.js", "React", "Next.js", "FastAPI", "GraphQL"]
        }
    ]
}

export const experience = [
    {
        company: "BNY Mellon",
        role: "AI ML Data Engineer",
        period: "Jun 2024 - Present",
        description: "Building end-to-end CI/CD pipelines for ML model deployment and designing RAG pipelines with LangChain.",
        achievements: [
            "Built end-to-end CI/CD pipelines for ML model deployment",
            "Designed RAG pipelines with LangChain and OpenAI APIs",
            "Developed microservices for AI inference using Node.js and Python",
            "Fine-tuned transformer models (BERT, GPT-2/3, T5) with LoRA and PEFT"
        ]
    },
    {
        company: "Huntington Bank",
        role: "AI ML Data Engineer",
        period: "Jun 2021 - Dec 2023",
        description: "Deployed scalable ML pipelines and utilized semantic search capabilities.",
        achievements: [
            "Deployed scalable ML pipelines with semantic search capabilities",
            "Built ETL workflows using Spark, ADF, Databricks, and Snowflake",
            "Created data analytics dashboards with Power BI and Tableau"
        ]
    },
    {
        company: "Northern Trust",
        role: "AI ML Data Engineer",
        period: "Sep 2019 - May 2021",
        description: "Implemented NLP, computer vision, and speech recognition solutions.",
        achievements: [
            "Implemented NLP, computer vision, and speech recognition solutions",
            "Built MLOps pipelines for continuous model deployment"
        ]
    },
    {
        company: "Catholic Health Initiatives",
        role: "ML Data Engineer",
        period: "Sep 2017 - Aug 2019",
        description: "Deployed sentiment analysis models and predictive models for large-scale datasets.",
        achievements: [
            "Deployed sentiment analysis models using NLP techniques",
            "Developed predictive models for large-scale datasets"
        ]
    },
    {
        company: "Kroger",
        role: "ML Data Engineer",
        period: "Oct 2013 - Aug 2017",
        description: "Built automated ML pipelines and migrated data warehouses to the cloud.",
        achievements: [
            "Built automated ML pipelines with MLflow and SageMaker",
            "Migrated data warehouse to cloud infrastructure"
        ]
    }
]

export const projects = [
    {
        title: "AI-powered Chatbot",
        description: "Intelligent chatbot using GPT-4 and RAG pipeline for domain-specific queries.",
        tags: ["GPT-4", "LangChain", "Vector DB", "React"],
        link: "#",
        github: "#"
    },
    {
        title: "Real-time Semantic Search",
        description: "High-performance search engine using vector databases for semantic understanding.",
        tags: ["Pinecone", "Embeddings", "FastAPI", "Python"],
        link: "#",
        github: "#"
    },
    {
        title: "Multi-task LLM System",
        description: "Unified system for text summarization and document retrieval using fine-tuned LLMs.",
        tags: ["LLaMA", "PEFT", "Hugging Face", "PyTorch"],
        link: "#",
        github: "#"
    },
    {
        title: "Scalable ETL Pipeline",
        description: "Processing terabytes of data with automated workflows and data quality checks.",
        tags: ["Spark", "Databricks", "Airflow", "AWS"],
        link: "#",
        github: "#"
    }
]
