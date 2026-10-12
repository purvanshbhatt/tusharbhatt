// src/data/legalGuidesData.js
// Practical Legal Knowledge Guides, Statutory Procedural Checklists & MP Revenue/Court Fee Reference
// Fully compliant with Bar Council of India informational ethics.

export const legalGuidesData = {
  en: {
    badge: "Public Legal Literacy & Practice Guides",
    title: "Legal Knowledge & Procedural Insights",
    subtitle: "Authoritative, step-by-step guidance on land revenue laws, commercial cheque disputes, and inheritance rights under Madhya Pradesh jurisdiction.",
    bciDisclaimer: "Provided strictly for informational and public legal awareness purposes under Bar Council of India guidelines. Does not constitute advertisement or solicit clients.",
    calculatorTab: "MP Stamp Duty & Court Fee Quick Reference",
    articlesTab: "Practical Legal Guides",
    searchPlaceholder: "Search legal guides (e.g., MPLRC, partition, cheque bounce, inheritance)...",
    readTimeLabel: "read",
    consultationPrompt: "Need specific legal assessment on your case matter?",
    consultationAction: "Consult on WhatsApp",
    articles: [
      {
        id: "mplrc-land-partition",
        title: "Partition & Demarcation of Agricultural Land under MP Land Revenue Code (MPLRC)",
        shortDesc: "Complete legal procedure for legal partition (बंटवारा) under Section 178 and demarcation (सीमांकन) under Section 129 before the Tehsildar in Madhya Pradesh.",
        tag: "MPLRC / Property Law",
        readTime: "6 min",
        keySections: "Section 178, 129, 109 & 110 of MPLRC 1959",
        jurisdiction: "Tehsildar / SDO / High Court of MP",
        whatsappTopic: "MPLRC Agricultural Land Partition & Demarcation",
        highlights: [
          "Mandatory application under Section 178 MPLRC before Tehsildar",
          "Public notice (इश्तहार) and 30-day objection period for interested co-sharers",
          "Preparation of Fard-Bantwara & Proposed Map (नक्शा तरमीम) by Patwari",
          "Right of appeal before Sub-Divisional Officer (SDO) under Section 44 within 45 days"
        ],
        overview: "In Madhya Pradesh, joint ancestral agricultural land frequently leads to unrecorded possession disputes among co-sharers. Understanding the difference between mutual consensus partition and contested statutory partition before the Revenue Courts is critical for securing separate Khasra entries and clear land title.",
        sections: [
          {
            heading: "1. Mutual Consent Partition vs. Contested Partition (Section 178 MPLRC)",
            content: "When all co-owners agree on their respective shares and demarcated parcels, a joint application under Section 178 MPLRC can be submitted before the Tehsildar. If any co-sharer refuses or disputes the share percentage, the matter becomes a contested partition proceeding. The Tehsildar possesses statutory authority to determine individual legal shares based on the family genealogy (वंशावली/पेढ़ीनामा) and revenue records."
          },
          {
            heading: "2. Key Procedural Steps in Revenue Court",
            content: "Step 1: Filing the petition with updated Khasra, Khatoni (B-1), map copy, and legal heir tree.\nStep 2: Service of summons to all co-sharers and issuance of public notification (इश्तहार) inviting third-party objections within 30 days.\nStep 3: Directing the Revenue Inspector (RI) and Patwari to inspect ground possession and prepare the Panchnama & Proposed Partition Map (Fard-Bantwara).\nStep 4: Adjudication of objections, formal confirmation of lots, and issuance of separate Revenue Passbooks (ऋण पुस्तिका/खसरा नंबर)."
          },
          {
            heading: "3. Demarcation of Boundaries (Section 129 MPLRC)",
            content: "If boundary disputes arise after partition or encroachment is suspected, an independent application under Section 129 MPLRC is submitted. The Revenue Inspector uses digital ETS (Electronic Total Station) / traditional chain survey in the presence of neighboring landholders to prepare the spot Panchnama."
          },
          {
            heading: "4. Appellate Remedies",
            content: "Any person aggrieved by the Tehsildar's order can file a First Appeal before the Sub-Divisional Officer (SDO) under Section 44 of the MPLRC within 45 days. If substantive civil title is in dispute rather than simple revenue partition, a declaratory civil suit before the Civil Court (Civil Judge Senior Division) is maintainable."
          }
        ],
        checklist: [
          "Updated Khasra (खसरा) and B-1 Khatoni copies certified by Lok Seva Kendra",
          "Registered sale deed, gift deed, or ancestral will (if applicable)",
          "Authenticated Family Tree (वंशावली / पेढ़ीनामा) signed by Sarpanch / Notary",
          "Cadastral Map trace (अक्स नक्शा) showing current parcel shape",
          "Adhaar and contact credentials of all co-tenants"
        ]
      },
      {
        id: "section-138-cheque-bounce",
        title: "Section 138 NI Act: Strict Timelines, 15-Day Statutory Notice & Complaint Procedure",
        shortDesc: "The legal process to recover dishonored cheque dues: 30-day notice limitation, 15-day cure period, and trial before the Judicial Magistrate First Class (JMFC).",
        tag: "Commercial / Criminal Law",
        readTime: "5 min",
        keySections: "Sections 138, 139, 141, 142 of Negotiable Instruments Act, 1881",
        jurisdiction: "JMFC Court (Ujjain / Indore / Jhabua / Thandla)",
        whatsappTopic: "Section 138 Cheque Dishonour Legal Action",
        highlights: [
          "Strict 30-day statutory window from bank memo receipt to dispatch legal notice",
          "Mandatory 15-day notice period granted to the drawer to make payment",
          "Filing of criminal complaint under Section 142 within 30 days after expiry of 15 days",
          "Statutory presumption under Section 139 favoring the holder in due course"
        ],
        overview: "A dishonored cheque is both a commercial grievance and a criminal offence punishable with imprisonment up to 2 years, fine up to twice the cheque amount, or both. Failure to adhere strictly to the calendar timelines under Section 138 can extinguish the criminal remedy entirely.",
        sections: [
          {
            heading: "1. The Inflexible 30-Day Limitation for Legal Demand Notice",
            content: "Upon receipt of the bank return memo ('Funds Insufficient', 'Account Closed', 'Stop Payment'), the complainant must issue a formal legal demand notice drafted by an advocate within exactly 30 days. The notice must demand the exact cheque amount and must be dispatched via Registered Post AD / Speed Post."
          },
          {
            heading: "2. The 15-Day Grace Window & Cause of Action",
            content: "Once the accused receives the notice, the law grants them 15 clear days to settle the outstanding debt. The cause of action arises only on the 16th day if payment is not tendered. Filing before the 15-day period expires renders the complaint premature and liable to dismissal."
          },
          {
            heading: "3. Jurisdiction & Filing Before the Judicial Magistrate (JMFC)",
            content: "Under the 2015 Amendment (Section 142(2)), the complaint must be filed in the court within whose local jurisdiction the branch of the bank where the payee maintains the account is situated (if presented through an account). The complaint must be filed within 30 days from the day the cause of action arose."
          },
          {
            heading: "4. Section 143A: Interim Compensation Provision",
            content: "The complainant can petition the trial court under Section 143A for interim compensation up to 20% of the cheque value pending trial once charges are framed or notice is read out, providing substantial financial relief during prolonged proceedings."
          }
        ],
        checklist: [
          "Original Cheque and Bank Return Memo showing exact reason for dishonor",
          "Copy of Legal Demand Notice drafted and signed by legal counsel",
          "Postal Speed Post Receipts and official India Post delivery tracking report",
          "Underlying invoices, contracts, promissory notes, or ledger extracts proving legally enforceable debt",
          "Complainant's bank account statement showing cheque presentation"
        ]
      },
      {
        id: "hindu-succession-daughters-rights",
        title: "Daughters' Coparcenary Rights in Ancestral Property: Hindu Succession Act Post-Vineeta Sharma",
        shortDesc: "Analysis of the Supreme Court milestone in Vineeta Sharma v. Rakesh Sharma: Equal coparcenary rights for daughters by birth regardless of father's date of death.",
        tag: "Family & Property Law",
        readTime: "7 min",
        keySections: "Section 6, Hindu Succession Act 1956 (Amended 2005)",
        jurisdiction: "Civil Court / District Court / High Court of MP",
        whatsappTopic: "Ancestral Property Daughter Right & Partition",
        highlights: [
          "Daughter is a coparcener by birth with identical rights and liabilities as a son",
          "Father did not need to be alive on September 9, 2005 (Vineeta Sharma milestone)",
          "Protection of registered partitions completed prior to December 20, 2004",
          "Right to initiate partition suit and claim equal share in ancestral agricultural/residential properties"
        ],
        overview: "The landmark three-judge bench verdict of the Hon'ble Supreme Court in Vineeta Sharma v. Rakesh Sharma (2020) decisively settled longstanding legal ambiguities regarding Section 6 of the Hindu Succession Act, establishing that daughters hold equal birthrights as coparceners in Hindu Undivided Family (HUF) properties.",
        sections: [
          {
            heading: "1. Unconditional Coparcenary Right from Birth",
            content: "The Supreme Court clarified that coparcenary rights are conferred upon a daughter by birth (unobstructed heritage / apratibandha daya). Consequently, it is immaterial whether the father was alive or deceased when the Hindu Succession (Amendment) Act 2005 came into effect on 9th September 2005."
          },
          {
            heading: "2. Exception: Protected Prior Partitions (December 20, 2004 cutoff)",
            content: "To safeguard past transactions, any genuine partition finalized by registered deed or decree of a court prior to 20th December 2004 remains unaffected. However, oral family settlements (मौखिक पारिवारिक समझौता) or fraudulent unregistered paper partitions cannot defeat a daughter's legitimate coparcenary share."
          },
          {
            heading: "3. Application to Agricultural Lands in Madhya Pradesh",
            content: "Following the repeal of Section 4(2) of the Central Act in 2005, personal succession laws apply equally to agricultural land holdings. Male co-heirs can no longer deny daughters their lawful share in ancestral agricultural land under customary pretexts."
          },
          {
            heading: "4. Remedy: Civil Suit for Partition & Injunction",
            content: "If male siblings or co-sharers attempt to sell, mortgage, or mutate ancestral property excluding daughters, the appropriate remedy is an urgent Civil Suit for Partition & Separate Possession coupled with an application for Temporary Injunction under Order 39 Rules 1 & 2 CPC to restrain alienation of property pending trial."
          }
        ],
        checklist: [
          "Genealogical table / Pedigree certificate establishing family lineage",
          "Certified copies of ancestral land title deeds (Khasra records from grandfather's era)",
          "Death certificates of common ancestors / father",
          "Details of any attempted unilateral sale deeds or third-party encumbrances",
          "Notice of demand for partition served on other co-sharers"
        ]
      }
    ],
    calculator: {
      title: "Madhya Pradesh Revenue & Court Fee Reference Guide",
      subtitle: "Indicative statutory fee schedules and stamp duty brackets applicable across Madhya Pradesh courts and registration offices.",
      disclaimerNote: "*Note: Statutory stamp duties and court fees are subject to periodic state gazette notifications. Consult our chamber for exact valuation on specific instrument schedules.",
      sections: [
        {
          category: "Agricultural Land Partition (MPLRC)",
          feeType: "Revenue Application & Demarcation Fees",
          details: [
            { item: "Section 178 Partition Application", cost: "Standard Court Fee Stamp (₹10 - ₹20) on application" },
            { item: "Section 129 Demarcation (सीमांकन) Fee", cost: "₹500 per survey number (paid via MP e-Challan / Cyber Treasury)" },
            { item: "Certified Khasra / B-1 Khatoni copy", cost: "₹30 - ₹50 per document via MP Bhulekh / Lok Seva Kendra" },
            { item: "First Appeal before SDO (Section 44)", cost: "Court fee stamp of ₹20 + certified copy of Tehsildar order" }
          ]
        },
        {
          category: "Civil Suits for Title & Partition (MP Court Fees Act)",
          feeType: "Court Fees Payable before Civil Courts",
          details: [
            { item: "Suit for Partition (Joint Possession established)", cost: "Fixed Court Fee (₹500 - ₹2,000 depending on specific prayer & jurisdiction)" },
            { item: "Suit for Declaration of Title with Injunction", cost: "Ad-valorem court fee based on land revenue multiple or market guideline value" },
            { item: "Temporary Injunction Application (Order 39 R 1 & 2)", cost: "₹20 - ₹50 court fee stamp" },
            { item: "Civil Revision / First Appeal before High Court", cost: "Fixed statutory slab under MP Court Fees (Amendment) Rules" }
          ]
        },
        {
          category: "Negotiable Instruments Act (Section 138 Complaints)",
          feeType: "Magistrate Court Filing Fees",
          details: [
            { item: "Filing Criminal Complaint before JMFC", cost: "Nominal court fee stamp (approx. ₹20 - ₹100 depending on district schedule)" },
            { item: "Advocate Legal Demand Notice via Speed Post", cost: "₹40 - ₹80 postal franking per addressee with AD" },
            { item: "Section 143A Interim Compensation Claim", cost: "No separate ad-valorem fee required at interim petition stage" },
            { item: "Bail bond & Surety verification", cost: "Revenue stamp ₹50 - ₹100 on surety deed" }
          ]
        },
        {
          category: "Property Registration & Conveyance (MP Registration)",
          feeType: "Guideline Value Stamp Duty Slabs",
          details: [
            { item: "Conveyance / Sale Deed (Standard Rate)", cost: "Approx. 7.5% - 9.5% (Stamp duty 5% + Municipal/Panchayat Duty 2-3% + Reg fee)" },
            { item: "Family Partition Deed (Registered)", cost: "Concessional stamp duty on non-equalizing ancestral shares" },
            { item: "Settlement / Gift Deed within blood relations", cost: "Substantially reduced stamp duty for parents/children/spouse under MP rules" },
            { item: "General Power of Attorney (Within blood relations)", cost: "Fixed nominal stamp duty (₹1,000 + registration fee)" }
          ]
        }
      ]
    }
  },

  hi: {
    badge: "जन विधिक साक्षरता एवं व्यावहारिक मार्गदर्शिका",
    title: "विधिक जानकारी एवं कानूनी प्रक्रिया",
    subtitle: "मध्य प्रदेश में भूमि राजस्व, चेक बाउंस वाद एवं पैतृक संपत्ति उत्तराधिकार पर चरणबद्ध, प्रामाणिक कानूनी विश्लेषण।",
    bciDisclaimer: "यह सामग्री बार काउंसिल ऑफ इंडिया के नियमों के तहत केवल सार्वजनिक विधिक जागरूकता एवं शिक्षा हेतु उपलब्ध कराई गई है। इसे किसी भी रूप में प्रचार अथवा वकालत का विज्ञापन न समझा जाए।",
    calculatorTab: "म.प्र. स्टाम्प शुल्क एवं कोर्ट फीस तालिका",
    articlesTab: "व्यावहारिक कानूनी मार्गदर्शिका",
    searchPlaceholder: "मार्गदर्शिका खोजें (उदा. भूमि बंटवारा, सीमांकन, 138 नोटिस, बेटी का अधिकार)...",
    readTimeLabel: "पठन समय",
    consultationPrompt: "क्या आपके प्रकरण में कोई जटिल कानूनी बिंदु है?",
    consultationAction: "व्हाट्सऐप पर परामर्श लें",
    articles: [
      {
        id: "mplrc-land-partition",
        title: "मध्य प्रदेश भू-राजस्व संहिता (MPLRC) अंतर्गत कृषि भूमि का विधिक बंटवारा एवं सीमांकन प्रक्रिया",
        shortDesc: "धारा 178 अंतर्गत तहसीलदार के समक्ष कानूनी बंटवारा, फर्द-बंटवारा, फौती नामांतरण तथा धारा 129 अंतर्गत सीमांकन की संपूर्ण व्यवहारिक कार्यप्रणाली।",
        tag: "भूमि राजस्व कानून (MPLRC)",
        readTime: "6 मिनट",
        keySections: "धारा 178, 129, 109 एवं 110, म.प्र. भू-राजस्व संहिता 1959",
        jurisdiction: "तहसीलदार / अनुविभागीय अधिकारी (SDO) / उच्च न्यायालय म.प्र.",
        whatsappTopic: "कृषि भूमि बंटवारा एवं सीमांकन कानूनी प्रक्रिया",
        highlights: [
          "तहसीलदार के समक्ष धारा 178 के अंतर्गत विधिक आवेदन प्रस्तुत करना",
          "सह-खातेदारों को सम्मन एवं 30 दिवसीय सार्वजनिक आम सूचना (इश्तहार) जारी होना",
          "पटवारी एवं राजस्व निरीक्षक द्वारा फर्द-बंटवारा व नक्शा तरमीम तैयार करना",
          "तहसीलदार के आदेश के विरुद्ध 45 दिनों में SDO के समक्ष प्रथम अपील (धारा 44)"
        ],
        overview: "मध्य प्रदेश में पैतृक कृषि भूमि के संयुक्त खातों में आपसी सहमति न होने पर विवाद उत्पन्न होते हैं। धारा 178 के तहत विधिक बंटवारा करवाकर प्रत्येक खातेदार अपने हिस्से का पृथक खसरा नंबर एवं ऋण पुस्तिका प्राप्त कर सकता है, जिससे भविष्य में बिक्री, बैंक ऋण या पारिवारिक विवादों का स्थायी समाधान होता है।",
        sections: [
          {
            heading: "1. आपसी सहमति बंटवारा बनाम विवादित बंटवारा (धारा 178 MPLRC)",
            content: "यदि सभी सह-खातेदार अपने हिस्सों और स्थल स्थिति पर सहमत हैं, तो आपसी राजीनामे के आधार पर तहसीलदार त्वरित आदेश पारित करते हैं। यदि कोई भी खातेदार हिस्से को लेकर आपत्ति उठाता है, तो मामला विवादित वाद में परिवर्तित हो जाता है। तहसीलदार पारिवारिक वंशावली (पेढ़ीनामा) एवं राजस्व अभिलेखों के आधार पर विधिक अंश निर्धारित करते हैं।"
          },
          {
            heading: "2. राजस्व न्यायालय में प्रक्रिया के प्रमुख चरण",
            content: "चरण 1: अद्यतन खसरा, बी-1 खतौनी, अक्स नक्शा एवं वंशावली सहित धारा 178 का आवेदन पेश करना।\nचरण 2: सभी सह-खातेदारों को नोटिस तामील तथा 30 दिनों का सार्वजनिक इश्तहार जारी करना।\nचरण 3: पटवारी व आरआई द्वारा स्थल पंचनामा एवं फर्द-बंटवारा (प्रस्तावित नक्शा) तैयार करवाना।\nचरण 4: आपत्तियों का निराकरण कर पृथक-पृथक खाते कायम करना एवं नक्शा बटांकन (तरमीम) की अनुमति देना।"
          },
          {
            heading: "3. भूमि सीमांकन की प्रक्रिया (धारा 129 MPLRC)",
            content: "यदि भूमि की सीमाओं पर मेड़ का विवाद हो या किसी पड़ोसी खातेदार द्वारा अतिक्रमण की आशंका हो, तो धारा 129 के अंतर्गत सीमांकन आवेदन लगाया जाता है। राजस्व निरीक्षक (RI) आधुनिक ईटीएस मशीन या जरीब से सीमावर्ती कृषकों की उपस्थिति में पैमाइश कर स्थल पंचनामा बनाता है।"
          },
          {
            heading: "4. अपील एवं सिविल कोर्ट का क्षेत्राधिकार",
            content: "तहसीलदार के अंतिम आदेश से असंतुष्ट पक्षकार आदेश प्राप्ति के 45 दिनों के भीतर अनुविभागीय अधिकारी (SDO) के समक्ष धारा 44 के अंतर्गत प्रथम अपील प्रस्तुत कर सकता है। यदि विवाद मात्र बंटवारे का न होकर मूल मालिकाना हक (Title) का है, तो सिविल जज सीनियर डिवीजन के समक्ष घोषणात्मक सिविल वाद (Declaratory Suit) दायर किया जाना चाहिए।"
          }
        ],
        checklist: [
          "लोक सेवा केंद्र से प्रमाणित अद्यतन खसरा नकल एवं बी-1 खतौनी",
          "भूमि का अक्स नक्शा (भू-अभिलेख पोर्टल से)",
          "पारिवारिक वंशावली (पेढ़ीनामा / पंचनामा) सरपंच या नोटरी द्वारा सत्यापित",
          "सभी जीवित सह-खातेदारों एवं बहनों/माताओं के नाम व पते",
          "पूर्व में हुआ कोई पंजीकृत बैनामा, दानपत्र या वसीयतनामा (यदि उपलब्ध हो)"
        ]
      },
      {
        id: "section-138-cheque-bounce",
        title: "चेक अनादरण (धारा 138 NI Act): 15-दिवसीय विधिक सूचना, समय-सीमा एवं वसूली प्रक्रिया",
        shortDesc: "चेक बाउंस होने पर कानूनी कदम: बैंक मीमो मिलने के 30 दिन में एडवोकेट लीगल नोटिस, 15 दिन का भुगतान समय, तथा JMFC कोर्ट में परिवाद दायर करने की सटीक प्रक्रिया।",
        tag: "व्यापारिक एवं आपराधिक विधि",
        readTime: "5 मिनट",
        keySections: "धारा 138, 139, 141, 142, परक्राम्य लिखत अधिनियम 1881",
        jurisdiction: "न्यायिक मजिस्ट्रेट प्रथम श्रेणी (JMFC) - उज्जैन / इंदौर / झाबुआ / थांदला",
        whatsappTopic: "धारा 138 चेक बाउंस विधिक कार्यवाही",
        highlights: [
          "बैंक मीमो प्राप्त होने की दिनांक से 30 दिनों के भीतर विधिक नोटिस भेजना अनिवार्य",
          "नोटिस तामील होने के बाद चेक जारीकर्ता को भुगतान हेतु 15 दिनों का वैधानिक समय",
          "15 दिन बीतने के बाद अगले 30 दिनों के भीतर सक्षम JMFC न्यायालय में परिवाद पेश करना",
          "धारा 139 के तहत चेक प्राप्तकर्ता के पक्ष में विधिक दायित्व की वैधानिक उपधारणा"
        ],
        overview: "चेक का अनादर (बाउंस) होना केवल सिविल मामला नहीं बल्कि एक दांडिक अपराध है, जिसमें दोषी को 2 वर्ष तक का कारावास अथवा चेक राशि का दोगुना जुर्माना या दोनों हो सकते हैं। धारा 138 के तहत सबसे महत्वपूर्ण है निर्धारित कानूनी समय-सीमा (कैलेंडर डेज) का अक्षरशः पालन करना।",
        sections: [
          {
            heading: "1. 30 दिवसीय अनिवार्य विधिक मांग सूचना (Demand Notice)",
            content: "जब बैंक से चेक 'अपर्याप्त निधि' (Insufficient Funds) या 'भुगतान रोका' (Stop Payment) की पर्ची के साथ वापस आए, तो 30 दिनों के भीतर अधिवक्ता के माध्यम से पंजीकृत डाक (Speed Post / Regd AD) द्वारा विधिक मांग सूचना भेजना विधि अनुसार अनिवार्य है।"
          },
          {
            heading: "2. 15 दिनों का प्रतीक्षा समय एवं वाद-कारण (Cause of Action)",
            content: "कानून चेक जारीकर्ता को नोटिस मिलने के बाद राशि चुकाने हेतु 15 पूरे दिन देता है। यदि 15 दिनों में भुगतान नहीं किया जाता, तो 16वें दिन अपराध पूर्ण माना जाता है। 15 दिन पूरे होने से पूर्व परिवाद दायर करना असामयिक (Premature) माना जाकर खारिज हो सकता है।"
          },
          {
            heading: "3. न्यायिक मजिस्ट्रेट (JMFC) न्यायालय का क्षेत्राधिकार",
            content: "2015 के संशोधन (धारा 142(2)) के अनुसार परिवाद उस न्यायालय में प्रस्तुत किया जाता है जिसके स्थानीय क्षेत्राधिकार में परिवादी (Payee) का बैंक खाता स्थित है, जहां चेक प्रस्तुत किया गया था। परिवाद वाद-कारण उत्पन्न होने के 30 दिनों में पेश होना चाहिए।"
          },
          {
            heading: "4. धारा 143A: अंतरिम क्षतिपूर्ति का प्रावधान",
            content: "मुकदमे के दौरान परिवादी न्यायालय से चेक राशि का 20% तक अंतरिम मुआवजा (Interim Compensation) दिलवाने हेतु आवेदन कर सकता है। इससे वर्षों चलने वाले मुकदमे के दौरान परिवादी को तत्काल वित्तीय राहत प्राप्त होती है।"
          }
        ],
        checklist: [
          "मूल चेक (Original Dishonored Cheque)",
          "बैंक का मूल रिटर्न मीमो (Cheque Return Memo)",
          "अधिवक्ता द्वारा प्रेषित विधिक मांग सूचना की प्रति",
          "स्पीड पोस्ट की रसीद एवं इंडिया पोस्ट की ऑनलाइन डिलीवरी ट्रैकिंग रिपोर्ट",
          "लेनदेन के दस्तावेज़ (बिल, अनुबंध, खाता बही या शपथपत्र)"
        ]
      },
      {
        id: "hindu-succession-daughters-rights",
        title: "पैतृक संपत्ति में बेटियों का कानूनी अधिकार: हिंदू उत्तराधिकार अधिनियम एवं सुप्रीम कोर्ट विनीता शर्मा फैसला",
        shortDesc: "माननीय सर्वोच्च न्यायालय के विनीता शर्मा बनाम राकेश शर्मा मील के पत्थर फैसले का विश्लेषण: जन्म से पुत्र के समान सह-दायिकी (Coparcenary) अधिकार।",
        tag: "पारिवारिक एवं संपत्ति विधि",
        readTime: "7 मिनट",
        keySections: "धारा 6, हिंदू उत्तराधिकार अधिनियम 1956 (संशोधित 2005)",
        jurisdiction: "सिविल न्यायालय / जिला न्यायालय / उच्च न्यायालय म.प्र.",
        whatsappTopic: "पैतृक संपत्ति में बेटी का विधिक अधिकार",
        highlights: [
          "बेटी जन्म से ही पुत्र के समान पूर्ण सह-दायक (Coparcener) है",
          "9 सितंबर 2005 को पिता का जीवित होना आवश्यक नहीं (सुप्रीम कोर्ट का ऐतिहासिक निर्णय)",
          "20 दिसंबर 2004 से पूर्व हुए पंजीकृत बंटवारे ही सुरक्षित हैं, मौखिक समझौते अमान्य",
          "मध्य प्रदेश में कृषि एवं आवासीय दोनों संपत्तियों पर समान रूप से लागू"
        ],
        overview: "सुप्रीम कोर्ट की तीन सदस्यीय संविधान पीठ ने विनीता शर्मा बनाम राकेश शर्मा (2020) में ऐतिहासिक व्यवस्था देकर स्पष्ट किया कि बेटियों को पैतृक संपत्ति में जन्म से वही अधिकार प्राप्त हैं जो पुत्रों को हैं। पिता 2005 से पूर्व दिवंगत भी हो गए हों, तब भी बेटी का अधिकार समाप्त नहीं होता।",
        sections: [
          {
            heading: "1. जन्म से अप्रतिबंधित सह-दायिकी अधिकार (Unobstructed Heritage)",
            content: "सर्वोच्च न्यायालय ने माना कि बेटी का अधिकार पिता के जीवित होने पर निर्भर नहीं है, बल्कि उसके जन्म से ही सह-दायक के रूप में प्रारंभ होता है। इसलिए 2005 के संशोधन के समय पिता के जीवित रहने की पुरानी तकनीकी शर्त को पूरी तरह निरस्त कर दिया गया।"
          },
          {
            heading: "2. अपवाद: 20 दिसंबर 2004 से पूर्व के वैध पंजीकृत बंटवारे",
            content: "कानून में केवल उन्हीं बंटवारों को संरक्षण दिया गया है जो 20 दिसंबर 2004 से पहले पंजीकृत दस्तावेज या न्यायालय की डिक्री द्वारा विधिवत संपन्न हो चुके थे। केवल मौखिक विभाजन या असत्यापित कागजी फेरबदल के आधार पर बेटियों को वंचित नहीं किया जा सकता।"
          },
          {
            heading: "3. मध्य प्रदेश में कृषि भूमि पर कानून का प्रभाव",
            content: "2005 के संशोधन द्वारा धारा 4(2) के हटने के बाद, मध्य प्रदेश की कृषि भूमि पर भी केंद्रीय उत्तराधिकार कानून समान रूप से लागू होता है। पारंपरिक रिवाजों या केवल बेटों के नाम फौती नामांतरण करा लेने से बेटियों का हिस्सा समाप्त नहीं होता।"
          },
          {
            heading: "4. विधिक उपाय: बंटवारा एवं स्थगन हेतु सिविल वाद",
            content: "यदि भाई या अन्य रिश्तेदार संपत्ति को बेचने या अंतरित करने का प्रयास करें, तो सिविल कोर्ट में बंटवारा एवं पृथक आधिपत्य (Suit for Partition) का वाद दायर कर ऑर्डर 39 रूल 1 व 2 सीपीसी के तहत संपत्ति के बेचान पर तत्काल स्थगन (Stay Order) प्राप्त किया जा सकता है।"
          }
        ],
        checklist: [
          "पारिवारिक वंशावली एवं मृत्यु प्रमाण पत्र",
          "दादा-परदादा के समय के मूल खसरा एवं राजस्व रिकॉर्ड",
          "संपत्ति के वर्तमान दस्तावेज एवं खतौनी",
          "अन्य वारिसों द्वारा की गई किसी अवैध बिक्री या नामांतरण की प्रति",
          "बंटवारे की मांग हेतु प्रेषित कानूनी नोटिस की प्रति (यदि दिया गया हो)"
        ]
      }
    ],
    calculator: {
      title: "मध्य प्रदेश भू-राजस्व एवं न्यायालय शुल्क संदर्भ तालिका",
      subtitle: "मध्य प्रदेश के न्यायालयों एवं पंजीयन कार्यालयों में लागू वैधानिक शुल्क, स्टाम्प ड्यूटी एवं प्रक्रियाओं का त्वरित ब्यौरा।",
      disclaimerNote: "*नोट: स्टाम्प शुल्क एवं कोर्ट फीस राज्य शासन की समय-समय पर जारी अधिसूचनाओं के अधीन हैं। विशिष्ट विलेख के सटीक मूल्यांकन हेतु हमारे चेम्बर से परामर्श करें।",
      sections: [
        {
          category: "कृषि भूमि बंटवारा एवं राजस्व कार्यवाही (MPLRC)",
          feeType: "राजस्व आवेदन एवं सीमांकन शुल्क",
          details: [
            { item: "धारा 178 बंटवारा आवेदन", cost: "आवेदन पत्र पर सामान्य न्याय शुल्क स्टाम्प (₹10 - ₹20)" },
            { item: "धारा 129 सीमांकन शुल्क", cost: "प्रति सर्वे नंबर ₹500 (म.प्र. ई-चालान / सायबर ट्रेजरी द्वारा देय)" },
            { item: "प्रमाणित खसरा / बी-1 खतौनी नकल", cost: "₹30 - ₹50 प्रति दस्तावेज (लोक सेवा केंद्र / एमपी भूलेख)" },
            { item: "SDO के समक्ष प्रथम अपील (धारा 44)", cost: "न्याय शुल्क ₹20 + आदेश की प्रमाणित प्रतिलिपि" }
          ]
        },
        {
          category: "सिविल न्यायालय में स्वत्व एवं बंटवारा वाद (MP Court Fees Act)",
          feeType: "सिविल कोर्ट में देय न्यायालय शुल्क",
          details: [
            { item: "बंटवारा वाद (जहां संयुक्त आधिपत्य सिद्ध हो)", cost: "नियत कोर्ट फीस (प्रार्थना एवं क्षेत्राधिकार अनुसार ₹500 - ₹2,000)" },
            { item: "स्वत्व घोषणा एवं स्थायी निषेधाज्ञा वाद", cost: "मूल्यांकन के आधार पर एड-वेलोरम (मूल्यानुसार) निर्धारित कोर्ट फीस" },
            { item: "अस्थायी स्थगन आवेदन (Order 39 R 1 & 2 CPC)", cost: "₹20 - ₹50 का न्याय शुल्क टिकट" },
            { item: "उच्च न्यायालय में प्रथम अपील / रिवीजन", cost: "म.प्र. कोर्ट फीस नियमावली अनुसार निर्धारित स्लैब" }
          ]
        },
        {
          category: "चेक बाउंस प्रकरण (धारा 138 NI Act)",
          feeType: "मजिस्ट्रेट कोर्ट में परिवाद शुल्क",
          details: [
            { item: "JMFC कोर्ट में आपराधिक परिवाद प्रस्तुति", cost: "नाममात्र कोर्ट फीस स्टाम्प (जिला तालिका अनुसार लगभग ₹20 - ₹100)" },
            { item: "स्पीड पोस्ट द्वारा विधिक मांग सूचना (Notice)", cost: "प्रति प्रेषक लगभग ₹40 - ₹80 (पावती सहित)" },
            { item: "धारा 143A अंतरिम मुआवजा आवेदन", cost: "आवेदन पर कोई पृथक मूल्यानुसार शुल्क देय नहीं" },
            { item: "जमानत पत्र एवं मुचलका सत्यापन", cost: "जमानतदार के शपथपत्र व बंधपत्र पर ₹50 - ₹100 रेवेन्यू स्टाम्प" }
          ]
        },
        {
          category: "संपत्ति पंजीयन एवं रजिस्ट्री (MP Registration Guidelines)",
          feeType: "गाइडलाइन मूल्य अनुसार स्टाम्प ड्यूटी स्लैब",
          details: [
            { item: "विक्रय पत्र / रजिस्ट्री (सामान्य दर)", cost: "लगभग 7.5% - 9.5% (स्टाम्प 5% + उपकर/निकाय शुल्क 2-3% + पंजीयन शुल्क)" },
            { item: "पारिवारिक संपत्ति बंटवारा विलेख", cost: "पैतृक हिस्सेदारी के अनुसार विशेष रियायती स्टाम्प शुल्क" },
            { item: "रक्त संबंधों में दानपत्र (Gift Deed)", cost: "माता-पिता, संतान अथवा पति-पत्नी के मध्य विशेष छूट प्राप्त दर" },
            { item: "मुख्तारनामा (Power of Attorney - रक्त संबंध)", cost: "नाममात्र नियत शुल्क (लगभग ₹1,000 + पंजीयन शुल्क)" }
          ]
        }
      ]
    }
  }
};
