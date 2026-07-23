import React, { useState } from 'react';
import { Sparkles, Zap, Brain, ChevronRight, CheckCircle2, X, FileText, ExternalLink } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  subtext: string;
  sourceName?: string;
  sourceUrl?: string;
}

interface Proposal {
  id: string;
  title: string;
  visionBadge: string;
  shortDesc: string;
  metrics: Metric[];
  pillars?: {
    title: string;
    desc: string;
  }[];
  competitiveLandscape?: {
    vendor: string;
    product: string;
    status: string;
    sourceUrl?: string;
  }[];
  references?: {
    id: string;
    citation: string;
    url: string;
  }[];
  detailedPitch: string[];
  ask: string;
}

export const InnovationProposalsPanel: React.FC = () => {
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);

  const proposals: Proposal[] = [
    {
      id: 'agent-memory-sdk',
      title: 'A Db2 Agent Memory SDK',
      visionBadge: 'Revenue & Market Productization',
      shortDesc: 'Closing the AI agent-memory gap against Oracle, AWS, and Google — converting Db2\'s existing vector and in-database AI capability into a packaged, revenue-generating SDK.',
      metrics: [
        {
          label: 'Global AI Agents Market',
          value: 'Growing Fast',
          subtext: 'Projected multi-billion dollar AI agents market by 2030 (46.3% CAGR)',
          sourceName: 'MarketsandMarkets Report',
          sourceUrl: 'https://www.marketsandmarkets.com'
        },
        {
          label: 'Oracle AI Database YoY',
          value: 'Triple-Digit',
          subtext: 'YoY growth of Oracle\'s AI-native database line in Q4 FY26',
          sourceName: 'Oracle Q4 FY26 Results',
          sourceUrl: 'https://www.oracle.com/news/'
        },
        {
          label: 'Competitors Monetizing',
          value: 'Oracle · AWS · Google',
          subtext: 'Oracle (AI Agent Memory), AWS (Bedrock Memory), Google (Vertex Memory)',
          sourceName: 'Competitor Announcements',
          sourceUrl: 'https://blogs.oracle.com/developers'
        },
        {
          label: 'Db2 Status Today',
          value: 'Gap to Close',
          subtext: 'No packaged agent-memory SDK shipped yet despite native vector engine',
          sourceName: 'IBM Product Announcements',
          sourceUrl: 'https://www.ibm.com/new/announcements'
        }
      ],
      pillars: [
        { title: 'Working Memory', desc: 'Short-term mental notes during active conversation sessions.' },
        { title: 'Semantic Memory', desc: 'Stored facts & domain knowledge learned about users/systems.' },
        { title: 'Episodic Memory', desc: 'Historical record of specific past events and interactions.' },
        { title: 'Procedural Memory', desc: 'Learned routines and execution steps for recurring tasks.' }
      ],
      competitiveLandscape: [
        { vendor: 'Oracle', product: 'AI Agent Memory (oracleagentmemory SDK)', status: 'Launched May 2026. 93.8% accuracy on LongMemEval benchmark; 9.5x lower token cost.', sourceUrl: 'https://blogs.oracle.com/developers' },
        { vendor: 'AWS', product: 'Bedrock AgentCore Memory', status: 'GA with episodic memory, streaming updates & metadata tagging (Workday, S&P Global).', sourceUrl: 'https://aboutamazon.com' },
        { vendor: 'Google', product: 'Vertex AI Memory Bank', status: 'GA; Payhawk reports >50% reduction in expense submission time.', sourceUrl: 'https://cloud.google.com/blog' },
        { vendor: 'Db2 (Today)', product: 'Native Vectors + TO_EMBEDDING', status: 'Strong kernel foundation, but lacks packaged framework-agnostic Agent Memory SDK.', sourceUrl: 'https://www.ibm.com/new/announcements' }
      ],
      references: [
        { id: '[1]', citation: 'Oracle, "AI Agent Memory: A Governed, Unified Memory Core," May 2026', url: 'https://blogs.oracle.com/developers' },
        { id: '[2]', citation: 'AWS, "New Amazon Bedrock AgentCore capabilities"', url: 'https://aboutamazon.com' },
        { id: '[3]', citation: 'Google Cloud, "Enhanced Tool Governance in Vertex AI Agent Builder"', url: 'https://cloud.google.com/blog' },
        { id: '[4]', citation: 'IBM, "Db2 12.1.5 now available," 2026', url: 'https://www.ibm.com/new/announcements' },
        { id: '[5]', citation: 'PR Newswire, "Mem0 Raises $24M Series A," Oct 2025', url: 'https://www.prnewswire.com' },
        { id: '[6]', citation: 'MarketsandMarkets, "AI Agents Market worth $52.62 billion by 2030"', url: 'https://www.marketsandmarkets.com' },
        { id: '[7]', citation: 'Preuve.ai, "AI Memory Stats 2026"', url: 'https://preuve.ai/blog' },
        { id: '[8]', citation: 'Oracle, "Record Q4 & FY2026 Results," Jun 2026', url: 'https://www.oracle.com/news/' }
      ],
      detailedPitch: [
        'Oracle, AWS, and Google have each shipped a dedicated AI agent memory product on top of their flagship database, citing triple-digit growth.',
        'Db2 already has native vector search and in-database LLM invocation (TO_EMBEDDING / TEXT_GENERATION) — what is missing is the packaged, benchmarked memory SDK layer.',
        'A Db2 Agent Memory SDK gives agents a persistent brain directly inside Db2 without data movement, ensuring enterprise governance and lower LLM token costs.',
        'Key business value: locks enterprise customers into Db2, lowers LLM query costs, improves agent accuracy to ~94%, and captures a multi-billion dollar market.'
      ],
      ask: 'Approve scoping and build of a Db2 Agent Memory SDK: a framework-agnostic client shipping working, semantic, episodic, and procedural memory on Db2\'s existing vector engine.'
    },
    {
      id: 'page-index-vectorless',
      title: 'PageIndex — Vectorless Retrieval Architecture for Db2',
      visionBadge: 'AI & Vector Index Architecture',
      shortDesc: 'Evaluate PageIndex as a next-generation retrieval architecture for Db2 that replaces vector search with reasoning over hierarchical document indexes — no embeddings, no vector database, no chunking.',
      metrics: [
        { label: 'Vector Infrastructure', value: 'No Vector DB', subtext: 'Reasoning-driven retrieval using PageIndex\'s hierarchical document index — no embeddings, no vector DB, and no synchronization overhead.' },
        { label: 'Retrieval Model', value: 'Context-Aware Reasoning', subtext: 'LLMs navigate structured PageIndex trees like a human expert, retrieving relevant sections through reasoning instead of similarity search.' },
        { label: 'Memory Footprint', value: '100% Vectorless', subtext: 'Zero embedding storage, zero re-vectorization after document updates, and significantly lower infrastructure cost.' }
      ],
      pillars: [
        { title: 'Human-like Retrieval', desc: 'LLMs reason over hierarchical PageIndex trees the way a human expert navigates a document.' },
        { title: 'Explainable Retrieval', desc: 'Every retrieved section is traceable to a specific page node — no black-box similarity scores.' },
        { title: 'No Vector DB', desc: 'Eliminates the need for a second vector database, reducing licensing cost and operational complexity.' },
        { title: 'No Chunking', desc: 'Documents are indexed hierarchically, preserving full context without lossy chunking strategies.' },
        { title: 'Context-Aware Reasoning', desc: 'Retrieval is guided by document structure and semantic hierarchy, not embedding proximity.' },
        { title: 'Lower Infrastructure Cost', desc: 'No embedding pipelines, no vector sync jobs, and no re-indexing on document updates.' }
      ],
      detailedPitch: [
        'Evaluate PageIndex as a next-generation retrieval architecture for Db2 that replaces vector search with reasoning over hierarchical document indexes.',
        'By leveraging relational storage and PageIndex tree structures, Db2 can support explainable, context-aware retrieval for enterprise documents without vector databases or chunking.',
        'Strategic Opportunity: Integrate PageIndex as a vectorless retrieval layer on top of Db2 to explore hierarchical indexing, agentic reasoning, explainable enterprise RAG, and native long-document intelligence.',
        'Db2\'s relational engine and native storage capabilities make it uniquely positioned to host PageIndex trees as structured tables — no additional infrastructure required.'
      ],
      ask: 'Explore PageIndex Architecture & Db2 Integration Proposal — approve evaluation of PageIndex as a vectorless retrieval layer within Db2\'s existing relational and document storage engine.'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Strategic Vision Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white shadow-xl relative overflow-hidden border border-blue-500/30">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm">
              🚀 Top Strategic Vision
            </span>
            <span className="px-3.5 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-extrabold border border-blue-400/30">
              Db2 Innovation Roadmap
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              VS Code Developer Extension Goal: Reach 1 Million Downloads
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-3xl leading-relaxed">
              Our flagship vision is to turn IBM Db2 Developer Extension into the standard database tooling for developers worldwide. Below are our high-impact innovation proposals driving AI and revenue expansion.
            </p>
          </div>
        </div>
      </div>

      {/* Innovation Proposals Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span>Active Innovation Proposals</span>
          </h3>
          <span className="self-start sm:self-center text-xs font-extrabold text-[#0f62fe] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 whitespace-nowrap">
            {proposals.length} Executive Proposals
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-slate-200 hover:border-[#0f62fe] shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0f62fe] text-xs font-black border border-blue-200">
                    {proposal.visionBadge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#0f62fe] transition-colors">
                  {proposal.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {proposal.shortDesc}
                </p>

                {/* Key Numbers / Revenue Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {proposal.metrics.map((m, idx) => {
                    const content = (
                      <div className={`p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all ${m.sourceUrl ? 'hover:bg-blue-50 hover:border-[#0f62fe] cursor-pointer group/metric' : ''}`}>
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{m.label}</p>
                          {m.sourceUrl && (
                            <ExternalLink className="w-3.5 h-3.5 text-[#0f62fe] opacity-80 group-hover/metric:scale-110 shrink-0" />
                          )}
                        </div>
                        <p className="text-lg sm:text-2xl font-black text-[#0f62fe] my-0.5 flex items-center gap-1">
                          <span>{m.value}</span>
                        </p>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-semibold line-clamp-2">{m.subtext}</p>
                        {m.sourceName && (
                          <span className="inline-block text-[9px] font-black text-[#0f62fe] underline mt-1">
                            Source: {m.sourceName}
                          </span>
                        )}
                      </div>
                    );

                    return m.sourceUrl ? (
                      <a
                        key={idx}
                        href={m.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={idx}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* View Strategy Detail Button */}
              <button
                onClick={() => setSelectedProposal(proposal)}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#0f62fe] hover:bg-blue-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all mt-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Explore Proposal Details & Revenue Case</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View for Detailed Proposal Breakdown */}
      {selectedProposal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-4 sm:p-8 space-y-6 shadow-2xl border border-slate-200 my-4 sm:my-8 max-h-[92vh] overflow-y-auto relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0f62fe] text-xs font-black border border-blue-200">
                  {selectedProposal.visionBadge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">
                  {selectedProposal.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProposal(null)}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {selectedProposal.metrics.map((m, idx) => {
                const metricContent = (
                  <div className={`p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 text-center transition-all ${m.sourceUrl ? 'hover:bg-blue-100/80 hover:border-[#0f62fe] cursor-pointer' : ''}`}>
                    <p className="text-[10px] font-black uppercase text-slate-500">{m.label}</p>
                    <p className="text-xl font-black text-[#0f62fe] my-0.5 flex items-center justify-center gap-1">
                      <span>{m.value}</span>
                      {m.sourceUrl && <ExternalLink className="w-3.5 h-3.5 shrink-0" />}
                    </p>
                    <p className="text-[10px] font-semibold text-slate-600 leading-tight">{m.subtext}</p>
                    {m.sourceName && (
                      <span className="inline-block text-[9px] font-black text-[#0f62fe] underline mt-1">
                        Source: {m.sourceName}
                      </span>
                    )}
                  </div>
                );

                return m.sourceUrl ? (
                  <a key={idx} href={m.sourceUrl} target="_blank" rel="noopener noreferrer" className="block">
                    {metricContent}
                  </a>
                ) : (
                  <div key={idx}>{metricContent}</div>
                );
              })}
            </div>

            {/* Pitch Points */}
            <div className="space-y-2">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0f62fe]" />
                <span>Executive Summary & Pitch</span>
              </h4>
              <div className="space-y-2">
                {selectedProposal.detailedPitch.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillars if present */}
            {selectedProposal.pillars && (
              <div className="space-y-2">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-600" />
                  <span>{selectedProposal.id === 'page-index-vectorless' ? 'Why PageIndex — Key Differentiators' : 'SDK Memory Architecture Pillars'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProposal.pillars.map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-1">
                      <p className="text-xs font-black text-purple-900">{p.title}</p>
                      <p className="text-xs text-slate-600 font-medium">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Competitive Landscape Table if present */}
            {selectedProposal.competitiveLandscape && (
              <div className="space-y-2">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Competitive Landscape Comparison
                </h4>
                <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-100 text-slate-700 font-black">
                      <tr>
                        <th className="p-2.5 border-b border-slate-200">Vendor</th>
                        <th className="p-2.5 border-b border-slate-200">Product</th>
                        <th className="p-2.5 border-b border-slate-200">Status & Benchmark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {selectedProposal.competitiveLandscape.map((row, idx) => (
                        <tr key={idx} className={row.vendor.includes('Db2') ? 'bg-amber-50/80 font-bold' : ''}>
                          <td className="p-2.5 font-bold text-slate-900">{row.vendor}</td>
                          <td className="p-2.5">{row.product}</td>
                          <td className="p-2.5 text-slate-600">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Document References if present */}
            {selectedProposal.references && (
              <div className="space-y-2">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0f62fe]" />
                  <span>Document Sources & Citations</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedProposal.references.map((ref, idx) => (
                    <a
                      key={idx}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-[#0f62fe] transition-all flex items-start gap-2 text-slate-700 font-semibold group/ref"
                    >
                      <span className="font-black text-[#0f62fe] shrink-0">{ref.id}</span>
                      <span className="flex-1 text-[11px] leading-tight group-hover/ref:text-[#0f62fe]">{ref.citation}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/ref:text-[#0f62fe] shrink-0 mt-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* The Ask */}
            <div className="p-4 rounded-2xl bg-blue-600 text-white space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">The Strategic Ask</span>
              <p className="text-xs sm:text-sm font-extrabold leading-snug">
                {selectedProposal.ask}
              </p>
            </div>

            {/* Close */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedProposal(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs"
              >
                Close Modal
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
