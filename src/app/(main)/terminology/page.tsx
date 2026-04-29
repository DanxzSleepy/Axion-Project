'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TerminologyPage() {
  const { t } = useLanguage();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const abbreviations = [
    { abbr: 'PU', term: t.terminology.abbreviations.PU_push },
    { abbr: 'PU', term: t.terminology.abbreviations.PU_pull },
    { abbr: 'HSPU', term: t.terminology.abbreviations.HSPU },
    { abbr: 'OAPU', term: t.terminology.abbreviations.OAPU },
    { abbr: 'OAP/OAC', term: t.terminology.abbreviations.OAPOAC },
    { abbr: 'MU', term: t.terminology.abbreviations.MU },
    { abbr: 'FL', term: t.terminology.abbreviations.FL },
    { abbr: 'PL', term: t.terminology.abbreviations.PL },
    { abbr: 'RIR', term: t.terminology.abbreviations.RIR },
    { abbr: 'ROM', term: t.terminology.abbreviations.ROM },
    { abbr: 'CNS', term: t.terminology.abbreviations.CNS },
    { abbr: 'PPT', term: t.terminology.abbreviations.PPT }
  ];

  const terminology = [
    {
      term: t.terminology.terms.setsReps,
      definition: t.terminology.terms.setsRepsDef
    },
    {
      term: t.terminology.terms.rest,
      definition: t.terminology.terms.restDef
    },
    {
      term: t.terminology.terms.volume,
      definition: t.terminology.terms.volumeDef
    },
    {
      term: t.terminology.terms.hold,
      definition: t.terminology.terms.holdDef
    },
    {
      term: t.terminology.terms.failure,
      definition: t.terminology.terms.failureDef
    },
    {
      term: t.terminology.terms.rir,
      definition: t.terminology.terms.rirDef
    },
    {
      term: t.terminology.terms.static,
      definition: t.terminology.terms.staticDef
    },
    {
      term: t.terminology.terms.dynamic,
      definition: t.terminology.terms.dynamicDef
    },
    {
      term: t.terminology.terms.progression,
      definition: t.terminology.terms.progressionDef
    },
    {
      term: t.terminology.terms.regression,
      definition: t.terminology.terms.regressionDef
    },
    {
      term: t.terminology.terms.eccentric,
      definition: t.terminology.terms.eccentricDef
    },
    {
      term: t.terminology.terms.concentric,
      definition: t.terminology.terms.concentricDef
    },
    {
      term: t.terminology.terms.rom,
      definition: t.terminology.terms.romDef
    },
    {
      term: t.terminology.terms.cns,
      definition: t.terminology.terms.cnsDef
    },
    {
      term: t.terminology.terms.negatives,
      definition: t.terminology.terms.negativesDef
    },
    {
      term: t.terminology.terms.ppt,
      definition: t.terminology.terms.pptDef
    }
  ];

  const difficultyRanks = [
    {
      rank: 'F',
      title: t.terminology.rankBaseline,
      description: t.terminology.rankBaselineDesc,
      examples: 'Push-ups, Australian Pull-ups',
      color: 'from-green-500 to-green-600'
    },
    {
      rank: 'D',
      title: t.terminology.rankBeginner,
      description: t.terminology.rankBeginnerDesc,
      examples: 'Pull-ups, Dips, Elbow Lever, L-sit, Frog Stand',
      color: 'from-blue-500 to-blue-600'
    },
    {
      rank: 'C',
      title: t.terminology.rankAdvBeginner,
      description: t.terminology.rankAdvBeginnerDesc,
      examples: 'Pike PU, Tuck FL, Handstand',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      rank: 'B',
      title: t.terminology.rankLowInt,
      description: t.terminology.rankLowIntDesc,
      examples: 'Tuck PL, HSPU, Adv. Tuck PL, Adv. Tuck FL, MU, V-sit, OAPU',
      color: 'from-orange-500 to-orange-600'
    },
    {
      rank: 'A',
      title: t.terminology.rankAdvInt,
      description: t.terminology.rankAdvIntDesc,
      examples: 'Str. PL, Str. FL, Full FL, 90° PU, OAP/OAC, Manna',
      color: 'from-red-500 to-red-600'
    },
    {
      rank: 'S',
      title: t.terminology.rankAdvanced,
      description: t.terminology.rankAdvancedDesc,
      examples: 'Full PL, Touch FL',
      color: 'from-purple-500 to-purple-600'
    },
    {
      rank: 'SS',
      title: t.terminology.rankElite,
      description: t.terminology.rankEliteDesc,
      examples: 'Dragon PL, Maltese, Full PL PUs, Iron Cross, Inverted Cross',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.terminology.title}
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          {t.terminology.subtitle}
        </p>
      </motion.div>

      {/* Abbreviations */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">{t.terminology.abbreviationsTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {abbreviations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-4 bg-card border border-border rounded-lg"
            >
              <div className="text-primary font-bold text-lg mb-1">{item.abbr}</div>
              <div className="text-foreground/70 text-sm">{item.term}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Terminology */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">{t.common.terminology}</h2>
        <div className="space-y-4">
          {terminology.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2 text-primary">{item.term}</h3>
              <p className="text-foreground/70">{item.definition}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Difficulty Rankings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">{t.terminology.difficultyTitle}</h2>
        <p className="text-foreground/70 mb-8 max-w-2xl">
          {t.terminology.difficultySubtitle}
        </p>
        
        <div className="space-y-6">
          {difficultyRanks.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 bg-card border border-border rounded-2xl relative overflow-hidden group"
            >
              {/* Rank Badge Background */}
              <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                  {item.rank}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">Examples:</span>
                    <span className="text-sm text-foreground/60">{item.examples}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
