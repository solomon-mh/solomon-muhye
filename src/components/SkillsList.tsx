import type { JSX } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaVuejs,
  FaPython,
} from "react-icons/fa";
import {
  SiPostman,
  SiVercel,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiRender,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiNuxtdotjs,
  SiExpress,
  SiMysql,
  SiOpenai,
  SiPytorch,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "DevOps"
  | "MobileApps"
  | "AI_ML";

type SkillItem = { icon: JSX.Element; label: string; description: string };
type SkillData = Record<SkillCategory, SkillItem[]>;

export const skillData: SkillData = {
  Frontend: [
    {
      icon: <FaReact />,
      label: "React",
      description: "#Hooks #ContextAPI #SPA #StateManagement #Performance",
    },
    {
      icon: <SiNextdotjs />,
      label: "Next.js",
      description:
        "#SSR #SSG #ISR #APIroutes #Middleware #PerformanceOptimization",
    },
    {
      icon: <FaVuejs />,
      label: "Vue.js",
      description: "#CompositionAPI #Vuex #SPA #Components #MaintainableCode",
    },
    {
      icon: <SiNuxtdotjs />,
      label: "Nuxt.js",
      description: "#SSR #SSG #ModularArchitecture #Vue #EnterpriseApps",
    },
  ],
  Backend: [
    {
      icon: <FaNodeJs />,
      label: "Node.js",
      description:
        "#EventLoop #NonBlockingIO #Streams #Clustering #HighPerformance",
    },
    {
      icon: <SiExpress />,
      label: "Express",
      description:
        "#RESTAPI #Middleware #Routing #ErrorHandling #ScalableBackend",
    },
    {
      icon: <SiNestjs />,
      label: "NestJS",
      description:
        "#TypeScript #DependencyInjection #ModularArchitecture #Testing #EnterpriseBackend",
    },
    {
      icon: <FaPython />,
      label: "Python (Flask/FastAPI)",
      description:
        "#RESTAPI #Microservices #Asynchronous #LLMIntegration #ScalablePython",
    },
  ],
  Database: [
    {
      icon: <SiMysql />,
      label: "MySQL",
      description:
        "#RelationalDB #SQL #Transactions #Indexing #QueryOptimization",
    },
    {
      icon: <SiMongodb />,
      label: "MongoDB",
      description:
        "#NoSQL #DocumentDB #Aggregation #Sharding #PerformanceTuning",
    },
    {
      icon: <SiPostgresql />,
      label: "PostgreSQL",
      description:
        "#AdvancedSQL #JSONB #FullTextSearch #Indexing #DataIntegrity",
    },
  ],
  Tools: [
    {
      icon: <FaGitAlt />,
      label: "Git",
      description:
        "#VersionControl #Branching #Rebase #MergeConflicts #Collaboration",
    },
    {
      icon: <SiPostman />,
      label: "Postman",
      description:
        "#APItesting #Automation #Collections #EnvironmentManagement",
    },
    {
      icon: <SiVercel />,
      label: "Vercel",
      description: "#Serverless #EdgeFunctions #Deployment #Performance",
    },
    {
      icon: <SiNetlify />,
      label: "Netlify",
      description: "#Jamstack #CI/CD #StaticHosting #EdgeFunctions",
    },
    {
      icon: <SiRender />,
      label: "Render",
      description:
        "#CloudDeployment #AutoScaling #WebServices #HighAvailability",
    },
  ],
  DevOps: [
    {
      icon: <FaDocker />,
      label: "Docker",
      description:
        "#Containerization #Compose #MultiStageBuilds #ProductionOptimization",
    },
    {
      icon: <SiVercel />,
      label: "CI/CD",
      description: "#PipelineAutomation #Testing #Security #Deployment",
    },
    {
      icon: <FaAws />,
      label: "AWS",
      description: "#EC2 #S3 #Lambda #AutoScaling #CloudSecurity",
    },
  ],
  MobileApps: [
    {
      icon: <SiReact />,
      label: "React Native",
      description:
        "#CrossPlatform #NativeModules #Performance #GestureHandling #MobileApps",
    },
  ],
  AI_ML: [
    {
      icon: <SiOpenai />,
      label: "Generative AI & LLMs",
      description: "#GPT-4 #Claude #PromptEngineering #RAG #AI-Integration",
    },
    {
      icon: <GiBrain />,
      label: "LLM Training & RLHF",
      description: "#FineTuning #DataCuration #RewardModeling #HAPI #RLHF",
    },
    {
      icon: <SiPytorch />,
      label: "AI Frameworks",
      description:
        "#PyTorch #TensorFlow #LangChain #DeepLearning #NeuralNetworks",
    },
  ],
};
