var hLink = "https://www.buzzfeed.com/kevinsmith/is-that-a-yeti-or-are-you-happy-to-see-me?utm_term=.hnD1eD0r8#.lijYmv3A4";
var hcurl = "curl -X GET --header 'Accept: application/json' 'https://watson-api-explorer.mybluemix.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&url=https%3A%2F%2Fwww.buzzfeed.com%2Fkevinsmith%2Fis-that-a-yeti-or-are-you-happy-to-see-me%3Futm_term%3D.hnD1eD0r8%23.lijYmv3A4&features=concepts%2Centities%2Ckeywords%2Ccategories%2Cemotion%2Csentiment%2Cmetadata%2Crelations%2Csemantic_roles&return_analyzed_text=false&clean=true&fallback_to_raw=true&concepts.limit=8&emotion.document=true&entities.limit=50&entities.emotion=true&entities.sentiment=true&keywords.limit=50&keywords.emotion=true&keywords.sentiment=true&relations.model=en-news&semantic_roles.limit=50&semantic_roles.entities=true&semantic_roles.keywords=true&sentiment.document=true'\n";
var hurl = "https://watson-api-explorer.mybluemix.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&url=https%3A%2F%2Fwww.buzzfeed.com%2Fkevinsmith%2Fis-that-a-yeti-or-are-you-happy-to-see-me%3Futm_term%3D.hnD1eD0r8%23.lijYmv3A4&features=concepts%2Centities%2Ckeywords%2Ccategories%2Cemotion%2Csentiment%2Cmetadata%2Crelations%2Csemantic_roles&return_analyzed_text=false&clean=true&fallback_to_raw=true&concepts.limit=8&emotion.document=true&entities.limit=50&entities.emotion=true&entities.sentiment=true&keywords.limit=50&keywords.emotion=true&keywords.sentiment=true&relations.model=en-news&semantic_roles.limit=50&semantic_roles.entities=true&semantic_roles.keywords=true&sentiment.document=true\n";

var h =
{
    "usage": {
    "text_units": 1,
        "text_characters": 190,
        "features": 8
},
    "sentiment": {
    "document": {
        "score": 0.860766,
            "label": "positive"
    }
},
    "semantic_roles": [
    {
        "subject": {
            "text": "He"
        },
        "sentence": " He's totally worth it, right?",
        "object": {
            "text": "totally worth it, right"
        },
        "action": {
            "verb": {
                "text": "has",
                "tense": "present"
            },
            "text": "has",
            "normalized": "has"
        }
    },
    {
        "subject": {
            "text": "We"
        },
        "sentence": " We hope you love the products we recommend!",
        "object": {
            "text": "you love the products we recommend",
            "keywords": [
                {
                    "text": "products"
                }
            ]
        },
        "action": {
            "verb": {
                "text": "hope",
                "tense": "present"
            },
            "text": "hope",
            "normalized": "hope"
        }
    },
    {
        "subject": {
            "text": "BuzzFeed",
            "keywords": [
                {
                    "text": "BuzzFeed"
                }
            ],
            "entities": [
                {
                    "type": "Company",
                    "text": "BuzzFeed",
                    "disambiguation": {
                        "subtype": [
                            "Website",
                            "Organization"
                        ],
                        "name": "BuzzFeed",
                        "dbpedia_resource": "http://dbpedia.org/resource/BuzzFeed"
                    }
                }
            ]
        },
        "sentence": " Just so you know, BuzzFeed may collect a share of sales from the links on this page.",
        "object": {
            "text": "a share of sales",
            "keywords": [
                {
                    "text": "share"
                },
                {
                    "text": "sales"
                }
            ]
        },
        "action": {
            "verb": {
                "text": "collect",
                "tense": "future"
            },
            "text": "may collect",
            "normalized": "may collect"
        }
    }
],
    "retrieved_url": "https://www.buzzfeed.com/kevinsmith/is-that-a-yeti-or-are-you-happy-to-see-me?utm_term=.hnD1eD0r8#.lijYmv3A4",
    "metadata": {
    "title": "23 Gifts For The Guy Who Seemingly Has Everything",
        "publication_date": "2017-11-20T15:30:00",
        "image": "https://img.buzzfeed.com/buzzfeed-static/static/2017-11/16/10/tmp/buzzfeed-prod-fastlane-01/b527c15d15665649f6b272ff8cd56787-1.jpg?crop=476:238;0,0",
        "feeds": [
        {
            "link": "https://img.buzzfeed.com/buzzfeed-static/static/2017-11/14/11/asset/buzzfeed-prod-fastlane-02/sub-buzz-7436-1510677235-3.png"
        },
        {
            "link": "https://img.buzzfeed.com/buzzfeed-static/static/2017-11/14/11/asset/buzzfeed-prod-fastlane-03/sub-buzz-17524-1510677106-1.jpg"
        },
        {
            "link": "https://img.buzzfeed.com/buzzfeed-static/static/2017-11/14/17/asset/buzzfeed-prod-fastlane-03/anigif_sub-buzz-30633-1510697860-6.gif"
        }
    ],
        "authors": [
        {
            "name": "Kevin Smith"
        },
        {
            "name": "officialkls"
        }
    ]
},
    "language": "en",
    "keywords": [
    {
        "text": "products",
        "sentiment": {
            "score": 0.878954,
            "label": "positive"
        },
        "relevance": 0.997474,
        "emotion": {
            "sadness": 0.02087,
            "joy": 0.582266,
            "fear": 0.005514,
            "disgust": 0.008589,
            "anger": 0.004179
        }
    },
    {
        "text": "BuzzFeed",
        "sentiment": {
            "score": 0,
            "label": "neutral"
        },
        "relevance": 0.948171,
        "emotion": {
            "sadness": 0.160935,
            "joy": 0.191573,
            "fear": 0.049947,
            "disgust": 0.023813,
            "anger": 0.045179
        }
    },
    {
        "text": "share",
        "sentiment": {
            "score": 0,
            "label": "neutral"
        },
        "relevance": 0.940813,
        "emotion": {
            "sadness": 0.160935,
            "joy": 0.191573,
            "fear": 0.049947,
            "disgust": 0.023813,
            "anger": 0.045179
        }
    },
    {
        "text": "sales",
        "sentiment": {
            "score": 0,
            "label": "neutral"
        },
        "relevance": 0.937134,
        "emotion": {
            "sadness": 0.160935,
            "joy": 0.191573,
            "fear": 0.049947,
            "disgust": 0.023813,
            "anger": 0.045179
        }
    },
    {
        "text": "links",
        "sentiment": {
            "score": 0,
            "label": "neutral"
        },
        "relevance": 0.931615,
        "emotion": {
            "sadness": 0.160935,
            "joy": 0.191573,
            "fear": 0.049947,
            "disgust": 0.023813,
            "anger": 0.045179
        }
    },
    {
        "text": "page",
        "sentiment": {
            "score": 0,
            "label": "neutral"
        },
        "relevance": 0.926097,
        "emotion": {
            "sadness": 0.160935,
            "joy": 0.191573,
            "fear": 0.049947,
            "disgust": 0.023813,
            "anger": 0.045179
        }
    }
],
    "entities": [
    {
        "type": "Company",
        "text": "BuzzFeed",
        "sentiment": {
            "score": 0,
            "label": "neutral"
        },
        "relevance": 0.878812,
        "emotion": {
            "sadness": 0.160935,
            "joy": 0.191573,
            "fear": 0.049947,
            "disgust": 0.023813,
            "anger": 0.045179
        },
        "disambiguation": {
            "subtype": [
                "Website"
            ],
            "name": "BuzzFeed",
            "dbpedia_resource": "http://dbpedia.org/resource/BuzzFeed"
        },
        "count": 1
    }
],
    "emotion": {
    "document": {
        "emotion": {
            "sadness": 0.02527,
                "joy": 0.71422,
                "fear": 0.012569,
                "disgust": 0.012054,
                "anger": 0.018854
        }
    }
},
    "concepts": [
    {
        "text": "Page, North Dakota",
        "relevance": 0.843095,
        "dbpedia_resource": "http://dbpedia.org/resource/Page,_North_Dakota"
    },
    {
        "text": "Virtual communities",
        "relevance": 0.793849,
        "dbpedia_resource": "http://dbpedia.org/resource/Virtual_communities"
    }
],
    "categories": [
    {
        "score": 0.998778,
        "label": "/shopping/gifts"
    },
    {
        "score": 0.530106,
        "label": "/technology and computing/computer security"
    },
    {
        "score": 0.494882,
        "label": "/business and industrial/company/earnings"
    }
],
    "warnings": [
    "relations: cannot analyze: downstream issue"
]
};

var m =
    {
        "usage": {
            "text_units": 1,
            "text_characters": 7063,
            "features": 9
        },
        "sentiment": {
            "document": {
                "score": -0.435421,
                "label": "negative"
            }
        },
        "semantic_roles": [
            {
                "subject": {
                    "text": "key headlines",
                    "keywords": [
                        {
                            "text": "key headlines"
                        }
                    ]
                },
                "sentence": "This morning’s key headlines from GenerationalDynamics.com",
                "object": {
                    "text": "from GenerationalDynamics.com",
                    "keywords": [
                        {
                            "text": "GenerationalDynamics.com"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "has",
                        "tense": "present"
                    },
                    "text": "s",
                    "normalized": "s"
                }
            },
            {
                "subject": {
                    "text": "Robert Mugabe",
                    "keywords": [
                        {
                            "text": "Robert Mugabe"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe",
                            "disambiguation": {
                                "subtype": [
                                    "Politician",
                                    "President"
                                ],
                                "name": "Robert Mugabe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Robert_Mugabe"
                            }
                        }
                    ]
                },
                "sentence": " Robert Mugabe, giving his speech on Sunday",
                "object": {
                    "text": "his speech",
                    "keywords": [
                        {
                            "text": "speech"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "give",
                        "tense": "present"
                    },
                    "text": "giving",
                    "normalized": "give"
                }
            },
            {
                "subject": {
                    "text": "the governing party of President Robert Mugabe",
                    "keywords": [
                        {
                            "text": "President Robert Mugabe"
                        },
                        {
                            "text": "party"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe",
                            "disambiguation": {
                                "subtype": [
                                    "Politician",
                                    "President"
                                ],
                                "name": "Robert Mugabe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Robert_Mugabe"
                            }
                        }
                    ]
                },
                "sentence": " First, as expected, the governing party of President Robert Mugabe’s governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "object": {
                    "text": "governing Zanu-pf party voted to expel him from the party and to demand his resignation",
                    "keywords": [
                        {
                            "text": "Zanu-pf party"
                        },
                        {
                            "text": "resignation"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Organization",
                            "text": "Zanu-PF",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalParty"
                                ],
                                "name": "Zimbabwe African National Union – Patriotic Front",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
                            }
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "has",
                        "tense": "present"
                    },
                    "text": "has",
                    "normalized": "has"
                }
            },
            {
                "subject": {
                    "text": "the governing party of President Robert Mugabe’s governing Zanu-pf party",
                    "keywords": [
                        {
                            "text": "President Robert Mugabe"
                        },
                        {
                            "text": "Zanu-pf party"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe",
                            "disambiguation": {
                                "subtype": [
                                    "Politician",
                                    "President"
                                ],
                                "name": "Robert Mugabe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Robert_Mugabe"
                            }
                        },
                        {
                            "type": "Organization",
                            "text": "Zanu-PF",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalParty"
                                ],
                                "name": "Zimbabwe African National Union – Patriotic Front",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
                            }
                        }
                    ]
                },
                "sentence": " First, as expected, the governing party of President Robert Mugabe’s governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "object": {
                    "text": "to expel him from the party and to demand his resignation",
                    "keywords": [
                        {
                            "text": "resignation"
                        },
                        {
                            "text": "party"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "vote",
                        "tense": "past"
                    },
                    "text": "voted",
                    "normalized": "vote"
                }
            },
            {
                "subject": {
                    "text": "the governing party of President Robert Mugabe’s governing Zanu-pf party",
                    "keywords": [
                        {
                            "text": "President Robert Mugabe"
                        },
                        {
                            "text": "Zanu-pf party"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe",
                            "disambiguation": {
                                "subtype": [
                                    "Politician",
                                    "President"
                                ],
                                "name": "Robert Mugabe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Robert_Mugabe"
                            }
                        },
                        {
                            "type": "Organization",
                            "text": "Zanu-PF",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalParty"
                                ],
                                "name": "Zimbabwe African National Union – Patriotic Front",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
                            }
                        }
                    ]
                },
                "sentence": " First, as expected, the governing party of President Robert Mugabe’s governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "object": {
                    "text": "him"
                },
                "action": {
                    "verb": {
                        "text": "expel",
                        "tense": "future"
                    },
                    "text": "voted to expel",
                    "normalized": "vote to expel"
                }
            },
            {
                "subject": {
                    "text": "the governing party of President Robert Mugabe’s governing Zanu-pf party",
                    "keywords": [
                        {
                            "text": "President Robert Mugabe"
                        },
                        {
                            "text": "Zanu-pf party"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe",
                            "disambiguation": {
                                "subtype": [
                                    "Politician",
                                    "President"
                                ],
                                "name": "Robert Mugabe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Robert_Mugabe"
                            }
                        },
                        {
                            "type": "Organization",
                            "text": "Zanu-PF",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalParty"
                                ],
                                "name": "Zimbabwe African National Union – Patriotic Front",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
                            }
                        }
                    ]
                },
                "sentence": " First, as expected, the governing party of President Robert Mugabe’s governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "object": {
                    "text": "his resignation",
                    "keywords": [
                        {
                            "text": "resignation"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "demand",
                        "tense": "future"
                    },
                    "text": "to demand",
                    "normalized": "to demand"
                }
            },
            {
                "subject": {
                    "text": "The Central Committee",
                    "keywords": [
                        {
                            "text": "Central Committee"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Organization",
                            "text": "Zanu-pf Central Committee",
                            "disambiguation": {
                                "subtype": [
                                    "GovernmentalBody"
                                ],
                                "name": "Central Committee of the Communist Party of the Soviet Union",
                                "dbpedia_resource": "http://dbpedia.org/resource/Central_Committee_of_the_Communist_Party_of_the_Soviet_Union"
                            }
                        }
                    ]
                },
                "sentence": " The Central Committee congratulated the masses of Zimbabwe for their participation in the historic solidarity march yesterday in support of the Zimbabwe War Veterans’ Association.",
                "object": {
                    "text": "the masses of Zimbabwe",
                    "keywords": [
                        {
                            "text": "masses"
                        },
                        {
                            "text": "Zimbabwe"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Location",
                            "text": "Zimbabwe",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalDistrict",
                                    "AdministrativeDivision",
                                    "Country",
                                    "GovernmentalJurisdiction",
                                    "Country"
                                ],
                                "name": "Zimbabwe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe"
                            }
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "congratulate",
                        "tense": "past"
                    },
                    "text": "congratulated",
                    "normalized": "congratulate"
                }
            },
            {
                "subject": {
                    "text": "from the position of President and First Secretary of Zanu-PF",
                    "keywords": [
                        {
                            "text": "Secretary"
                        },
                        {
                            "text": "position"
                        },
                        {
                            "text": "President"
                        },
                        {
                            "text": "Zanu-PF"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President and First Secretary"
                        },
                        {
                            "type": "Organization",
                            "text": "Zanu-PF",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalParty"
                                ],
                                "name": "Zimbabwe African National Union – Patriotic Front",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
                            }
                        }
                    ]
                },
                "sentence": " That Cde R.G. Mugabe be and he is hereby recalled from the position of President and First Secretary of Zanu-PF forthwith.",
                "object": {
                    "text": "he"
                },
                "action": {
                    "verb": {
                        "text": "recall",
                        "tense": "past"
                    },
                    "text": "recalled",
                    "normalized": "recall"
                }
            },
            {
                "subject": {
                    "text": "Cde R.G. Mugabe",
                    "keywords": [
                        {
                            "text": "Cde R.G. Mugabe"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        }
                    ]
                },
                "sentence": " Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "object": {
                    "text": "from his position as President and Head of State and Government of the Republic of Zimbabwe",
                    "keywords": [
                        {
                            "text": "Zimbabwe"
                        },
                        {
                            "text": "position"
                        },
                        {
                            "text": "President"
                        },
                        {
                            "text": "Head"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President and Head of State and Government"
                        },
                        {
                            "type": "Location",
                            "text": "Zimbabwe",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalDistrict",
                                    "AdministrativeDivision",
                                    "Country",
                                    "GovernmentalJurisdiction",
                                    "Country"
                                ],
                                "name": "Zimbabwe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe"
                            }
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "resign",
                        "tense": "future"
                    },
                    "text": "should resign",
                    "normalized": "should resign"
                }
            },
            {
                "subject": {
                    "text": "the resignation",
                    "keywords": [
                        {
                            "text": "resignation"
                        }
                    ]
                },
                "sentence": " Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "object": {
                    "text": "not tendered by midday tomorrow 20 November 2017",
                    "keywords": [
                        {
                            "text": "midday"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "have",
                        "tense": "present"
                    },
                    "text": "has",
                    "normalized": "have"
                }
            },
            {
                "subject": {
                    "text": "the resignation",
                    "keywords": [
                        {
                            "text": "resignation"
                        }
                    ]
                },
                "sentence": " Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "action": {
                    "verb": {
                        "text": "tender",
                        "tense": "past",
                        "negated": true
                    },
                    "text": "tendered",
                    "normalized": "tender"
                }
            },
            {
                "subject": {
                    "text": "the Zanu-PF Chief Whip (Cde Lovemore Matuke)",
                    "entities": []
                },
                "sentence": " Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "object": {
                    "text": "ordered to institute proceedings",
                    "keywords": [
                        {
                            "text": "proceedings"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "present"
                    },
                    "text": "is",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "the Zanu-PF Chief Whip (Cde Lovemore Matuke)",
                    "entities": []
                },
                "sentence": " Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "object": {
                    "text": "proceedings",
                    "keywords": [
                        {
                            "text": "proceedings"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "institute",
                        "tense": "future"
                    },
                    "text": "is ordered to institute",
                    "normalized": "be order to institute"
                }
            },
            {
                "subject": {
                    "text": "That Cde E. D. Mnangagwa",
                    "keywords": [
                        {
                            "text": "Cde E. D."
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde E. D. Mnangagwa"
                        }
                    ]
                },
                "sentence": " That Cde E. D. Mnangagwa be the party’s nominee to be appointed to fill the vacancy of State President in terms of Part 4, paragraph 14 sub paragraph 5 of the Sixth Schedule of Constitution of Zimbabwe Amendment Number 20.",
                "object": {
                    "text": "the party’s nominee to be appointed to fill the vacancy of State President in terms of Part 4, paragraph 14 sub paragraph 5 of the Sixth Schedule of Constitution of Zimbabwe Amendment Number 20",
                    "keywords": [
                        {
                            "text": "Zimbabwe Amendment Number"
                        },
                        {
                            "text": "sub paragraph"
                        },
                        {
                            "text": "State President"
                        },
                        {
                            "text": "vacancy"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "present"
                    },
                    "text": "be",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "the party",
                    "keywords": [
                        {
                            "text": "party"
                        }
                    ]
                },
                "sentence": " That Cde E. D. Mnangagwa be the party’s nominee to be appointed to fill the vacancy of State President in terms of Part 4, paragraph 14 sub paragraph 5 of the Sixth Schedule of Constitution of Zimbabwe Amendment Number 20.",
                "object": {
                    "text": "nominee",
                    "keywords": [
                        {
                            "text": "nominee"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "has",
                        "tense": "present"
                    },
                    "text": "s",
                    "normalized": "s"
                }
            },
            {
                "subject": {
                    "text": "the vacancy of State President",
                    "keywords": [
                        {
                            "text": "vacancy"
                        },
                        {
                            "text": "State President"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        }
                    ]
                },
                "sentence": " That Cde E. D. Mnangagwa be the party’s nominee to be appointed to fill the vacancy of State President in terms of Part 4, paragraph 14 sub paragraph 5 of the Sixth Schedule of Constitution of Zimbabwe Amendment Number 20.",
                "object": {
                    "text": "in terms of Part 4",
                    "keywords": [
                        {
                            "text": "terms"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "fill",
                        "tense": "future"
                    },
                    "text": "to be appointed to fill",
                    "normalized": "to be appoint to fill"
                }
            },
            {
                "subject": {
                    "text": "the Extraordinary Congress",
                    "keywords": [
                        {
                            "text": "Extraordinary"
                        },
                        {
                            "text": "Congress"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Organization",
                            "text": "Congress"
                        }
                    ]
                },
                "sentence": " That the Extraordinary Congress scheduled for 12th to the 17th of December 2017 should proceed for purposes of ratifying the decisions we have taken this afternoon, in particular ratifying the appointment of Cde ED Mnangagwa as the First Secretary and President of Zanu-PF.",
                "object": {
                    "text": "for 12th to the 17th of December 2017",
                    "keywords": [
                        {
                            "text": "17th"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "schedule",
                        "tense": "past"
                    },
                    "text": "scheduled",
                    "normalized": "schedule"
                }
            },
            {
                "subject": {
                    "text": "the Extraordinary Congress",
                    "keywords": [
                        {
                            "text": "Extraordinary"
                        },
                        {
                            "text": "Congress"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Organization",
                            "text": "Congress"
                        }
                    ]
                },
                "sentence": " That the Extraordinary Congress scheduled for 12th to the 17th of December 2017 should proceed for purposes of ratifying the decisions we have taken this afternoon, in particular ratifying the appointment of Cde ED Mnangagwa as the First Secretary and President of Zanu-PF.",
                "object": {
                    "text": "the decisions",
                    "keywords": [
                        {
                            "text": "decisions"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "ratify",
                        "tense": "future"
                    },
                    "text": "ratifying",
                    "normalized": "ratify"
                }
            },
            {
                "subject": {
                    "text": "we"
                },
                "sentence": " That the Extraordinary Congress scheduled for 12th to the 17th of December 2017 should proceed for purposes of ratifying the decisions we have taken this afternoon, in particular ratifying the appointment of Cde ED Mnangagwa as the First Secretary and President of Zanu-PF.",
                "object": {
                    "text": "the decisions",
                    "keywords": [
                        {
                            "text": "decisions"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "take",
                        "tense": "past"
                    },
                    "text": "have taken",
                    "normalized": "have take"
                }
            },
            {
                "subject": {
                    "text": "the appointment of Cde ED Mnangagwa",
                    "keywords": [
                        {
                            "text": "Cde ED Mnangagwa"
                        },
                        {
                            "text": "appointment"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Emmerson Dambudzo Mnangagwa"
                        }
                    ]
                },
                "sentence": " That the Extraordinary Congress scheduled for 12th to the 17th of December 2017 should proceed for purposes of ratifying the decisions we have taken this afternoon, in particular ratifying the appointment of Cde ED Mnangagwa as the First Secretary and President of Zanu-PF.",
                "object": {
                    "text": "as the First Secretary and President of Zanu-PF",
                    "keywords": [
                        {
                            "text": "Secretary"
                        },
                        {
                            "text": "President"
                        },
                        {
                            "text": "Zanu-PF"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "First Secretary"
                        },
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "Organization",
                            "text": "Zanu-PF",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalParty"
                                ],
                                "name": "Zimbabwe African National Union – Patriotic Front",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
                            }
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "ratify",
                        "tense": "present"
                    },
                    "text": "ratifying",
                    "normalized": "ratify"
                }
            },
            {
                "subject": {
                    "text": "The Extraordinary Congress",
                    "keywords": [
                        {
                            "text": "Extraordinary Congress"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Organization",
                            "text": "Congress"
                        }
                    ]
                },
                "sentence": " The Extraordinary Congress should also ratify the decision we have taken today to recall Cde R.G. Mugabe as President and First Secretary of Zanu-PF. …",
                "object": {
                    "text": "the decision we have taken today to recall Cde R.G. Mugabe as President and First Secretary of Zanu-PF. …",
                    "keywords": [
                        {
                            "text": "Cde R.G. Mugabe"
                        },
                        {
                            "text": "Secretary"
                        },
                        {
                            "text": "decision"
                        },
                        {
                            "text": "President"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        },
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "JobTitle",
                            "text": "First Secretary"
                        },
                        {
                            "type": "Organization",
                            "text": "Zanu-PF."
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "ratify",
                        "tense": "future"
                    },
                    "text": "should also ratify",
                    "normalized": "should also ratify"
                }
            },
            {
                "subject": {
                    "text": "we"
                },
                "sentence": " The Extraordinary Congress should also ratify the decision we have taken today to recall Cde R.G. Mugabe as President and First Secretary of Zanu-PF. …",
                "object": {
                    "text": "the decision",
                    "keywords": [
                        {
                            "text": "decision"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "take",
                        "tense": "past"
                    },
                    "text": "have taken",
                    "normalized": "have take"
                }
            },
            {
                "subject": {
                    "text": "Mugabe and the army",
                    "keywords": [
                        {
                            "text": "Mugabe"
                        },
                        {
                            "text": "army"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        },
                        {
                            "type": "Organization",
                            "text": "army"
                        }
                    ]
                },
                "sentence": " According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "object": {
                    "text": "reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live)",
                    "keywords": [
                        {
                            "text": "Mugabe"
                        },
                        {
                            "text": "agreement"
                        },
                        {
                            "text": "speech"
                        },
                        {
                            "text": "fact"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        },
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "have",
                        "tense": "past"
                    },
                    "text": "had",
                    "normalized": "have"
                }
            },
            {
                "subject": {
                    "text": "Mugabe and the army",
                    "keywords": [
                        {
                            "text": "Mugabe"
                        },
                        {
                            "text": "army"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        },
                        {
                            "type": "Organization",
                            "text": "army"
                        }
                    ]
                },
                "sentence": " According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "object": {
                    "text": "an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live)",
                    "keywords": [
                        {
                            "text": "Mugabe"
                        },
                        {
                            "text": "agreement"
                        },
                        {
                            "text": "speech"
                        },
                        {
                            "text": "fact"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        },
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "reach",
                        "tense": "past"
                    },
                    "text": "had reached",
                    "normalized": "have reach"
                }
            },
            {
                "subject": {
                    "text": "a speech",
                    "keywords": [
                        {
                            "text": "speech"
                        }
                    ]
                },
                "sentence": " According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "action": {
                    "verb": {
                        "text": "televise",
                        "tense": "past"
                    },
                    "text": "televised",
                    "normalized": "televise"
                }
            },
            {
                "subject": {
                    "text": "myself",
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        }
                    ]
                },
                "sentence": " According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "object": {
                    "text": "people around the world",
                    "keywords": [
                        {
                            "text": "people"
                        },
                        {
                            "text": "world"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "include",
                        "tense": "present"
                    },
                    "text": "including",
                    "normalized": "include"
                }
            },
            {
                "subject": {
                    "text": "Mugabe",
                    "keywords": [
                        {
                            "text": "Mugabe"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        }
                    ]
                },
                "sentence": " So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "action": {
                    "verb": {
                        "text": "come",
                        "tense": "past"
                    },
                    "text": "came",
                    "normalized": "come"
                }
            },
            {
                "subject": {
                    "text": "their hands",
                    "keywords": [
                        {
                            "text": "hands"
                        }
                    ]
                },
                "sentence": " So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "action": {
                    "verb": {
                        "text": "shake",
                        "tense": "past"
                    },
                    "text": "shook",
                    "normalized": "shake"
                }
            },
            {
                "subject": {
                    "text": "what happened next"
                },
                "sentence": " Now what happened next is open to speculation.",
                "object": {
                    "text": "open to speculation",
                    "keywords": [
                        {
                            "text": "speculation"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "present"
                    },
                    "text": "is",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "one"
                },
                "sentence": " According to some social media, one could see Mugabe switch speeches just before he sat down, though this has not been confirmed.",
                "object": {
                    "text": "Mugabe switch speeches just before he sat down",
                    "keywords": [
                        {
                            "text": "Mugabe switch speeches"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "see",
                        "tense": "future"
                    },
                    "text": "could see",
                    "normalized": "could see"
                }
            },
            {
                "subject": {
                    "text": "this"
                },
                "sentence": " According to some social media, one could see Mugabe switch speeches just before he sat down, though this has not been confirmed.",
                "object": {
                    "text": "not been confirmed"
                },
                "action": {
                    "verb": {
                        "text": "have",
                        "tense": "present"
                    },
                    "text": "has",
                    "normalized": "have"
                }
            },
            {
                "subject": {
                    "text": "little doubt",
                    "keywords": [
                        {
                            "text": "little doubt"
                        }
                    ]
                },
                "sentence": " At any rate, there is little doubt at the shock and surprise on the faces of the army generals as Mugabe read his speech.",
                "object": {
                    "text": "at the shock",
                    "keywords": [
                        {
                            "text": "shock"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "present"
                    },
                    "text": "is",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "Mugabe",
                    "keywords": [
                        {
                            "text": "Mugabe"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Person",
                            "text": "Cde R.G. Mugabe"
                        }
                    ]
                },
                "sentence": " At any rate, there is little doubt at the shock and surprise on the faces of the army generals as Mugabe read his speech.",
                "object": {
                    "text": "his speech",
                    "keywords": [
                        {
                            "text": "speech"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "read",
                        "tense": "past"
                    },
                    "text": "read",
                    "normalized": "read"
                }
            },
            {
                "subject": {
                    "text": "he"
                },
                "sentence": " Instead of resigning, he said that he would be presiding over the December 12-17 Extraordinary Congress mentioned in the above Zanu-pf statement, and then he went on to forgive the army:",
                "object": {
                    "text": "presiding"
                },
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "future"
                    },
                    "text": "be",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "he"
                },
                "sentence": " Instead of resigning, he said that he would be presiding over the December 12-17 Extraordinary Congress mentioned in the above Zanu-pf statement, and then he went on to forgive the army:",
                "action": {
                    "verb": {
                        "text": "preside",
                        "tense": "future"
                    },
                    "text": "would be presiding",
                    "normalized": "would be preside"
                }
            },
            {
                "subject": {
                    "text": "the December 12-17 Extraordinary Congress",
                    "keywords": [
                        {
                            "text": "Extraordinary"
                        },
                        {
                            "text": "Congress"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Organization",
                            "text": "Extraordinary Congress"
                        }
                    ]
                },
                "sentence": " Instead of resigning, he said that he would be presiding over the December 12-17 Extraordinary Congress mentioned in the above Zanu-pf statement, and then he went on to forgive the army:",
                "action": {
                    "verb": {
                        "text": "mention",
                        "tense": "past"
                    },
                    "text": "mentioned",
                    "normalized": "mention"
                }
            },
            {
                "subject": {
                    "text": "The congress",
                    "keywords": [
                        {
                            "text": "congress"
                        }
                    ],
                    "entities": [
                        {
                            "type": "Organization",
                            "text": "Extraordinary Congress"
                        }
                    ]
                },
                "sentence": " The congress is due in a few weeks from now.",
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "present"
                    },
                    "text": "is",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "I"
                },
                "sentence": " I will preside over its processes, which must not be prepossessed by any acts calculated to undermine it or to compromise it the outcomes in the eyes of the public.",
                "object": {
                    "text": "over its processes, which must not be prepossessed by any acts calculated to undermine it or to compromise it the outcomes in the eyes of the public",
                    "keywords": [
                        {
                            "text": "outcomes"
                        },
                        {
                            "text": "acts"
                        },
                        {
                            "text": "eyes"
                        },
                        {
                            "text": "processes"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "preside",
                        "tense": "future"
                    },
                    "text": "will preside",
                    "normalized": "will preside"
                }
            },
            {
                "subject": {
                    "text": "its processes",
                    "keywords": [
                        {
                            "text": "processes"
                        }
                    ]
                },
                "sentence": " I will preside over its processes, which must not be prepossessed by any acts calculated to undermine it or to compromise it the outcomes in the eyes of the public.",
                "object": {
                    "text": "prepossessed"
                },
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "future",
                        "negated": true
                    },
                    "text": "be",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "by any acts",
                    "keywords": [
                        {
                            "text": "acts"
                        }
                    ]
                },
                "sentence": " I will preside over its processes, which must not be prepossessed by any acts calculated to undermine it or to compromise it the outcomes in the eyes of the public.",
                "object": {
                    "text": "its processes",
                    "keywords": [
                        {
                            "text": "processes"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "prepossess",
                        "tense": "future",
                        "negated": true
                    },
                    "text": "prepossessed",
                    "normalized": "prepossess"
                }
            },
            {
                "subject": {
                    "text": "its processes",
                    "keywords": [
                        {
                            "text": "processes"
                        }
                    ]
                },
                "sentence": " I will preside over its processes, which must not be prepossessed by any acts calculated to undermine it or to compromise it the outcomes in the eyes of the public.",
                "object": {
                    "text": "it or to compromise it the outcomes in the eyes of the public",
                    "keywords": [
                        {
                            "text": "outcomes"
                        },
                        {
                            "text": "eyes"
                        },
                        {
                            "text": "public"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "undermine",
                        "tense": "future"
                    },
                    "text": "to undermine",
                    "normalized": "to undermine"
                }
            },
            {
                "subject": {
                    "text": "it"
                },
                "sentence": " I will preside over its processes, which must not be prepossessed by any acts calculated to undermine it or to compromise it the outcomes in the eyes of the public.",
                "object": {
                    "text": "it the outcomes in the eyes of the public",
                    "keywords": [
                        {
                            "text": "outcomes"
                        },
                        {
                            "text": "eyes"
                        },
                        {
                            "text": "public"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "compromise",
                        "tense": "future"
                    },
                    "text": "to compromise",
                    "normalized": "to compromise"
                }
            },
            {
                "subject": {
                    "text": "swapping by tricks",
                    "keywords": [
                        {
                            "text": "tricks"
                        }
                    ]
                },
                "sentence": " The way forward thus cannot be based on swapping by tricks that ride roughshod over party rules and procedures.",
                "action": {
                    "verb": {
                        "text": "ride",
                        "tense": "present"
                    },
                    "text": "ride",
                    "normalized": "ride"
                }
            },
            {
                "subject": {
                    "text": "their commander in chief,",
                    "keywords": [
                        {
                            "text": "commander"
                        },
                        {
                            "text": "chief"
                        }
                    ],
                    "entities": []
                },
                "sentence": " Whatever the pros and cons of the way they [the army] went about registering those concerns, I as the president of Zimbabwe, as their commander in chief, do acknowledge the issues they have drawn my attention to, and do believe that these were raised in the spirit of honesty and out of deep and patriotic concern for the stability of our nation and for the welfare of our people.",
                "object": {
                    "text": "acknowledge",
                    "keywords": [
                        {
                            "text": "acknowledge"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "do",
                        "tense": "present"
                    },
                    "text": "do",
                    "normalized": "do"
                }
            },
            {
                "subject": {
                    "text": "I as the president of Zimbabwe, as their commander in chief,",
                    "keywords": [
                        {
                            "text": "Zimbabwe"
                        },
                        {
                            "text": "commander"
                        },
                        {
                            "text": "president"
                        },
                        {
                            "text": "chief"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "Location",
                            "text": "Zimbabwe",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalDistrict",
                                    "AdministrativeDivision",
                                    "Country",
                                    "GovernmentalJurisdiction",
                                    "Country"
                                ],
                                "name": "Zimbabwe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe"
                            }
                        }
                    ]
                },
                "sentence": " Whatever the pros and cons of the way they [the army] went about registering those concerns, I as the president of Zimbabwe, as their commander in chief, do acknowledge the issues they have drawn my attention to, and do believe that these were raised in the spirit of honesty and out of deep and patriotic concern for the stability of our nation and for the welfare of our people.",
                "object": {
                    "text": "the issues they have drawn my attention to",
                    "keywords": [
                        {
                            "text": "attention"
                        },
                        {
                            "text": "issues"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "acknowledge",
                        "tense": "present"
                    },
                    "text": "do acknowledge",
                    "normalized": "do acknowledge"
                }
            },
            {
                "subject": {
                    "text": "I as the president of Zimbabwe, as their commander in chief,",
                    "keywords": [
                        {
                            "text": "Zimbabwe"
                        },
                        {
                            "text": "commander"
                        },
                        {
                            "text": "president"
                        },
                        {
                            "text": "chief"
                        }
                    ],
                    "entities": [
                        {
                            "type": "JobTitle",
                            "text": "President"
                        },
                        {
                            "type": "Location",
                            "text": "Zimbabwe",
                            "disambiguation": {
                                "subtype": [
                                    "PoliticalDistrict",
                                    "AdministrativeDivision",
                                    "Country",
                                    "GovernmentalJurisdiction",
                                    "Country"
                                ],
                                "name": "Zimbabwe",
                                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe"
                            }
                        }
                    ]
                },
                "sentence": " Whatever the pros and cons of the way they [the army] went about registering those concerns, I as the president of Zimbabwe, as their commander in chief, do acknowledge the issues they have drawn my attention to, and do believe that these were raised in the spirit of honesty and out of deep and patriotic concern for the stability of our nation and for the welfare of our people.",
                "object": {
                    "text": "that these were raised in the spirit of honesty and out of deep and patriotic concern for the stability of our nation and for the welfare of our people",
                    "keywords": [
                        {
                            "text": "patriotic concern"
                        },
                        {
                            "text": "honesty"
                        },
                        {
                            "text": "stability"
                        },
                        {
                            "text": "welfare"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "believe",
                        "tense": "present"
                    },
                    "text": "do believe",
                    "normalized": "do believe"
                }
            },
            {
                "subject": {
                    "text": "of honesty and out of deep and patriotic concern for the stability of our nation and for the welfare of our people",
                    "keywords": [
                        {
                            "text": "patriotic concern"
                        },
                        {
                            "text": "honesty"
                        },
                        {
                            "text": "stability"
                        },
                        {
                            "text": "welfare"
                        }
                    ]
                },
                "sentence": " Whatever the pros and cons of the way they [the army] went about registering those concerns, I as the president of Zimbabwe, as their commander in chief, do acknowledge the issues they have drawn my attention to, and do believe that these were raised in the spirit of honesty and out of deep and patriotic concern for the stability of our nation and for the welfare of our people.",
                "object": {
                    "text": "these"
                },
                "action": {
                    "verb": {
                        "text": "raise",
                        "tense": "past"
                    },
                    "text": "were raised",
                    "normalized": "be raise"
                }
            },
            {
                "subject": {
                    "text": "the pillars of state",
                    "keywords": [
                        {
                            "text": "pillars"
                        },
                        {
                            "text": "state"
                        }
                    ]
                },
                "sentence": " I’m happy that throughout the short period the pillars of state remained functional.",
                "action": {
                    "verb": {
                        "text": "remain",
                        "tense": "past"
                    },
                    "text": "remained",
                    "normalized": "remain"
                }
            },
            {
                "subject": {
                    "text": "He"
                },
                "sentence": " He gave the speech in a halting manner, with several pauses, and seemed at times to be confused.",
                "object": {
                    "text": "confused"
                },
                "action": {
                    "verb": {
                        "text": "be",
                        "tense": "future"
                    },
                    "text": "be",
                    "normalized": "be"
                }
            },
            {
                "subject": {
                    "text": "he"
                },
                "sentence": " At the end of the speech, he said good night, and then he apologized for having said some things out of order and hoped that they could be corrected.",
                "object": {
                    "text": "good night",
                    "keywords": [
                        {
                            "text": "good night"
                        }
                    ]
                },
                "action": {
                    "verb": {
                        "text": "say",
                        "tense": "past"
                    },
                    "text": "said",
                    "normalized": "say"
                }
            }
        ],
        "retrieved_url": "http://www.breitbart.com/national-security/2017/11/20/20-nov-17-world-view-robert-mugabe-stuns-zimbabwe-by-refusing-to-step-down/",
        "relations": [
            {
                "type": "agentOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.985602,
                "arguments": [
                    {
                        "text": "his",
                        "location": [
                            83,
                            86
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "speech",
                        "location": [
                            87,
                            93
                        ],
                        "entities": [
                            {
                                "type": "EventPerformance",
                                "text": "speech"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.559797,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            2303,
                            2305
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "speech",
                        "location": [
                            2327,
                            2333
                        ],
                        "entities": [
                            {
                                "type": "EventPerformance",
                                "text": "speech"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.979282,
                "arguments": [
                    {
                        "text": "his",
                        "location": [
                            2603,
                            2606
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "speech",
                        "location": [
                            2607,
                            2613
                        ],
                        "entities": [
                            {
                                "type": "EventPerformance",
                                "text": "speech"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.98338,
                "arguments": [
                    {
                        "text": "his",
                        "location": [
                            2902,
                            2905
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "speech",
                        "location": [
                            2906,
                            2912
                        ],
                        "entities": [
                            {
                                "type": "EventPerformance",
                                "text": "speech"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.820581,
                "arguments": [
                    {
                        "text": "He",
                        "location": [
                            3889,
                            3891
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "speech",
                        "location": [
                            3901,
                            3907
                        ],
                        "entities": [
                            {
                                "type": "EventPerformance",
                                "text": "speech"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "First, as expected, the governing party of President Robert Mugabe's governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "score": 0.581676,
                "arguments": [
                    {
                        "text": "his",
                        "location": [
                            456,
                            459
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "resignation",
                        "location": [
                            460,
                            471
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "resignation"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "First, as expected, the governing party of President Robert Mugabe's governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "score": 0.719452,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            6435,
                            6437
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "resign",
                        "location": [
                            6449,
                            6455
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "resignation"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOf",
                "sentence": "According to the resolutions of the Zanu-pf Central Committee: The Central Committee congratulated the masses of Zimbabwe for their participation in the historic solidarity march yesterday in support of the Zimbabwe War Veterans' Association.",
                "score": 0.430087,
                "arguments": [
                    {
                        "text": "Zanu-pf Central Committee",
                        "location": [
                            509,
                            534
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Zanu-pf Central Committee"
                            }
                        ]
                    },
                    {
                        "text": "The Central Committee",
                        "location": [
                            536,
                            557
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "The Central Committee"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "According to the resolutions of the Zanu-pf Central Committee: The Central Committee congratulated the masses of Zimbabwe for their participation in the historic solidarity march yesterday in support of the Zimbabwe War Veterans' Association.",
                "score": 0.660662,
                "arguments": [
                    {
                        "text": "Zimbabwe",
                        "location": [
                            680,
                            688
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zimbabwe Herald"
                            }
                        ]
                    },
                    {
                        "text": "War",
                        "location": [
                            689,
                            692
                        ],
                        "entities": [
                            {
                                "type": "EventViolence",
                                "text": "War"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "According to the resolutions of the Zanu-pf Central Committee: The Central Committee congratulated the masses of Zimbabwe for their participation in the historic solidarity march yesterday in support of the Zimbabwe War Veterans' Association.",
                "score": 0.727287,
                "arguments": [
                    {
                        "text": "Zimbabwe",
                        "location": [
                            6972,
                            6980
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zimbabwe Herald"
                            }
                        ]
                    },
                    {
                        "text": "War",
                        "location": [
                            6981,
                            6984
                        ],
                        "entities": [
                            {
                                "type": "EventViolence",
                                "text": "War"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "According to the resolutions of the Zanu-pf Central Committee: The Central Committee congratulated the masses of Zimbabwe for their participation in the historic solidarity march yesterday in support of the Zimbabwe War Veterans' Association.",
                "score": 0.66238,
                "arguments": [
                    {
                        "text": "Veterans",
                        "location": [
                            693,
                            701
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Veterans"
                            }
                        ]
                    },
                    {
                        "text": "Zimbabwe",
                        "location": [
                            680,
                            688
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zimbabwe Herald"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "According to the resolutions of the Zanu-pf Central Committee: The Central Committee congratulated the masses of Zimbabwe for their participation in the historic solidarity march yesterday in support of the Zimbabwe War Veterans' Association.",
                "score": 0.31921,
                "arguments": [
                    {
                        "text": "Veterans",
                        "location": [
                            693,
                            701
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Veterans"
                            }
                        ]
                    },
                    {
                        "text": "War",
                        "location": [
                            689,
                            692
                        ],
                        "entities": [
                            {
                                "type": "EventViolence",
                                "text": "War"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "According to the resolutions of the Zanu-pf Central Committee: The Central Committee congratulated the masses of Zimbabwe for their participation in the historic solidarity march yesterday in support of the Zimbabwe War Veterans' Association.",
                "score": 0.362902,
                "arguments": [
                    {
                        "text": "Veterans",
                        "location": [
                            6985,
                            6993
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Veterans"
                            }
                        ]
                    },
                    {
                        "text": "War",
                        "location": [
                            6981,
                            6984
                        ],
                        "entities": [
                            {
                                "type": "EventViolence",
                                "text": "War"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "score": 0.445669,
                "arguments": [
                    {
                        "text": "Cde R.G. Mugabe",
                        "location": [
                            869,
                            884
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Cde R.G. Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "resign",
                        "location": [
                            892,
                            898
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "resignation"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOf",
                "sentence": "Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "score": 0.562383,
                "arguments": [
                    {
                        "text": "Republic of Zimbabwe",
                        "location": [
                            980,
                            1000
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Herald\nThe Zimbabwean War Veterans Association"
                            }
                        ]
                    },
                    {
                        "text": "Government",
                        "location": [
                            962,
                            972
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Government",
                                "disambiguation": {
                                    "subtype": [
                                        "Country"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "timeOf",
                "sentence": "Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "score": 0.457664,
                "arguments": [
                    {
                        "text": "tomorrow 20 November 2017",
                        "location": [
                            1051,
                            1076
                        ],
                        "entities": [
                            {
                                "type": "Date",
                                "text": "tomorrow 20 November 2017"
                            }
                        ]
                    },
                    {
                        "text": "resignation",
                        "location": [
                            1012,
                            1023
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "resignation"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "playsRoleOf",
                "sentence": "Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "score": 0.272152,
                "arguments": [
                    {
                        "text": "Cde Lovemore Matuke",
                        "location": [
                            1111,
                            1130
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Cde Lovemore Matuke"
                            }
                        ]
                    },
                    {
                        "text": "Zanu-PF Chief Whip",
                        "location": [
                            1091,
                            1109
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Zanu-PF Chief Whip"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "Further, the resolutions that Cde R.G. Mugabe should resign forthwith from his position as President and Head of State and Government of the Republic of Zimbabwe and if the resignation has not tendered by midday tomorrow 20 November 2017 (Monday), the Zanu-PF Chief Whip (Cde Lovemore Matuke) is ordered to institute proceedings for the recall of the President in terms of Section 97 of the Constitution of Zimbabwe.",
                "score": 0.630796,
                "arguments": [
                    {
                        "text": "Zanu-PF Chief Whip",
                        "location": [
                            1091,
                            1109
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Zanu-PF Chief Whip"
                            }
                        ]
                    },
                    {
                        "text": "ordered",
                        "location": [
                            1135,
                            1142
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "ordered"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "timeOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.91154,
                "arguments": [
                    {
                        "text": "Sunday",
                        "location": [
                            97,
                            103
                        ],
                        "entities": [
                            {
                                "type": "Date",
                                "text": "Sunday"
                            }
                        ]
                    },
                    {
                        "text": "speech",
                        "location": [
                            87,
                            93
                        ],
                        "entities": [
                            {
                                "type": "EventPerformance",
                                "text": "speech"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "memberOf",
                "sentence": "That Cde E. D. Mnangagwa be the party's nominee to be appointed to fill the vacancy of State President in terms of Part 4, paragraph 14 sub paragraph 5 of the Sixth Schedule of Constitution of Zimbabwe Amendment Number 20.",
                "score": 0.40721,
                "arguments": [
                    {
                        "text": "nominee",
                        "location": [
                            1296,
                            1303
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Cde E. D. Mnangagwa"
                            }
                        ]
                    },
                    {
                        "text": "party",
                        "location": [
                            1288,
                            1293
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "party",
                                "disambiguation": {
                                    "subtype": [
                                        "Political"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "That Cde E. D. Mnangagwa be the party's nominee to be appointed to fill the vacancy of State President in terms of Part 4, paragraph 14 sub paragraph 5 of the Sixth Schedule of Constitution of Zimbabwe Amendment Number 20.",
                "score": 0.7136,
                "arguments": [
                    {
                        "text": "nominee",
                        "location": [
                            1296,
                            1303
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Cde E. D. Mnangagwa"
                            }
                        ]
                    },
                    {
                        "text": "appointed",
                        "location": [
                            1310,
                            1319
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "appointment"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "managerOf",
                "sentence": "That Cde E. D. Mnangagwa be the party's nominee to be appointed to fill the vacancy of State President in terms of Part 4, paragraph 14 sub paragraph 5 of the Sixth Schedule of Constitution of Zimbabwe Amendment Number 20.",
                "score": 0.489822,
                "arguments": [
                    {
                        "text": "President",
                        "location": [
                            1349,
                            1358
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "State",
                        "location": [
                            1343,
                            1348
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zanu-pf party"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "That the Extraordinary Congress scheduled for 12th to the 17th of December 2017 should proceed for purposes of ratifying the decisions we have taken this afternoon, in particular ratifying the appointment of Cde ED Mnangagwa as the First Secretary and President of Zanu-PF.",
                "score": 0.460086,
                "arguments": [
                    {
                        "text": "we",
                        "location": [
                            1614,
                            1616
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "we"
                            }
                        ]
                    },
                    {
                        "text": "appointment",
                        "location": [
                            1672,
                            1683
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "appointment"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "That the Extraordinary Congress scheduled for 12th to the 17th of December 2017 should proceed for purposes of ratifying the decisions we have taken this afternoon, in particular ratifying the appointment of Cde ED Mnangagwa as the First Secretary and President of Zanu-PF.",
                "score": 0.422727,
                "arguments": [
                    {
                        "text": "Cde ED Mnangagwa",
                        "location": [
                            1687,
                            1703
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Cde ED Mnangagwa",
                                "disambiguation": {
                                    "subtype": [
                                        "Commercial"
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "text": "appointment",
                        "location": [
                            1672,
                            1683
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "appointment"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "score": 0.538127,
                "arguments": [
                    {
                        "text": "army",
                        "location": [
                            2241,
                            2245
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "army",
                                "disambiguation": {
                                    "subtype": [
                                        "Military"
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "text": "announce",
                        "location": [
                            2289,
                            2297
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "announce"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "score": 0.592523,
                "arguments": [
                    {
                        "text": "army",
                        "location": [
                            2241,
                            2245
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "army",
                                "disambiguation": {
                                    "subtype": [
                                        "Military"
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "text": "step down",
                        "location": [
                            2312,
                            2321
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "step down"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "score": 0.930336,
                "arguments": [
                    {
                        "text": "Mugabe",
                        "location": [
                            2276,
                            2282
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "announce",
                        "location": [
                            2289,
                            2297
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "announce"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "score": 0.681814,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            2303,
                            2305
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "step down",
                        "location": [
                            2312,
                            2321
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "step down"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "According to numerous reports, Mugabe and the army had reached an agreement that Mugabe would announce that he would step down in a speech televised nationally (and, in fact, globally, since a lot of people around the world, including myself, were watching it live).",
                "score": 0.612236,
                "arguments": [
                    {
                        "text": "people",
                        "location": [
                            2395,
                            2401
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "people"
                            }
                        ]
                    },
                    {
                        "text": "world",
                        "location": [
                            2413,
                            2418
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "world",
                                "disambiguation": {
                                    "subtype": [
                                        "Area"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.586578,
                "arguments": [
                    {
                        "text": "people",
                        "location": [
                            108,
                            114
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "people"
                            }
                        ]
                    },
                    {
                        "text": "Zimbabwe",
                        "location": [
                            118,
                            126
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zimbabwe",
                                "disambiguation": {
                                    "subtype": [
                                        "Country"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "participantIn",
                "sentence": "So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "score": 0.897055,
                "arguments": [
                    {
                        "text": "Mugabe",
                        "location": [
                            2487,
                            2493
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "conference",
                        "location": [
                            2506,
                            2516
                        ],
                        "entities": [
                            {
                                "type": "EventMeeting",
                                "text": "conference"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "score": 0.58503,
                "arguments": [
                    {
                        "text": "Mugabe",
                        "location": [
                            2487,
                            2493
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "room",
                        "location": [
                            2517,
                            2521
                        ],
                        "entities": [
                            {
                                "type": "Facility",
                                "text": "room"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "score": 0.745726,
                "arguments": [
                    {
                        "text": "conference",
                        "location": [
                            2506,
                            2516
                        ],
                        "entities": [
                            {
                                "type": "EventMeeting",
                                "text": "conference"
                            }
                        ]
                    },
                    {
                        "text": "room",
                        "location": [
                            2517,
                            2521
                        ],
                        "entities": [
                            {
                                "type": "Facility",
                                "text": "room"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "participantIn",
                "sentence": "So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "score": 0.634964,
                "arguments": [
                    {
                        "text": "generals",
                        "location": [
                            2540,
                            2548
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "generals"
                            }
                        ]
                    },
                    {
                        "text": "conference",
                        "location": [
                            2506,
                            2516
                        ],
                        "entities": [
                            {
                                "type": "EventMeeting",
                                "text": "conference"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "score": 0.451291,
                "arguments": [
                    {
                        "text": "generals",
                        "location": [
                            2540,
                            2548
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "generals"
                            }
                        ]
                    },
                    {
                        "text": "army",
                        "location": [
                            2535,
                            2539
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "army",
                                "disambiguation": {
                                    "subtype": [
                                        "Military"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "So as the world watched, Mugabe came into a conference room with a dozen army generals, shook their hands, and sat down at the table to read his speech.",
                "score": 0.463097,
                "arguments": [
                    {
                        "text": "generals",
                        "location": [
                            2878,
                            2886
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "generals"
                            }
                        ]
                    },
                    {
                        "text": "army",
                        "location": [
                            2873,
                            2877
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "army",
                                "disambiguation": {
                                    "subtype": [
                                        "Military"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOfMany",
                "sentence": "At any rate, there is little doubt at the shock and surprise on the faces of the army generals as Mugabe read his speech.",
                "score": 0.520108,
                "arguments": [
                    {
                        "text": "Mugabe",
                        "location": [
                            2890,
                            2896
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "generals",
                        "location": [
                            2878,
                            2886
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "generals"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "Instead of resigning, he said that he would be presiding over the December 12-17 Extraordinary Congress mentioned in the above Zanu-pf statement, and then he went on to forgive the army: The congress is due in a few weeks from now.",
                "score": 0.997933,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            2936,
                            2938
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "said",
                        "location": [
                            2939,
                            2943
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "timeOf",
                "sentence": "Instead of resigning, he said that he would be presiding over the December 12-17 Extraordinary Congress mentioned in the above Zanu-pf statement, and then he went on to forgive the army: The congress is due in a few weeks from now.",
                "score": 0.885368,
                "arguments": [
                    {
                        "text": "December",
                        "location": [
                            2980,
                            2988
                        ],
                        "entities": [
                            {
                                "type": "Date",
                                "text": "December"
                            }
                        ]
                    },
                    {
                        "text": "mentioned",
                        "location": [
                            3018,
                            3027
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "mentioned"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "Instead of resigning, he said that he would be presiding over the December 12-17 Extraordinary Congress mentioned in the above Zanu-pf statement, and then he went on to forgive the army: The congress is due in a few weeks from now.",
                "score": 0.978854,
                "arguments": [
                    {
                        "text": "Congress",
                        "location": [
                            3009,
                            3017
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Congress",
                                "disambiguation": {
                                    "subtype": [
                                        "Government"
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "text": "mentioned",
                        "location": [
                            3018,
                            3027
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "mentioned"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "managerOf",
                "sentence": "Whatever the pros and cons of the way they [the army] went about registering those concerns, I as the president of Zimbabwe, as their commander in chief, do acknowledge the issues they have drawn my attention to, and do believe that these were raised in the spirit of honesty and out of deep and patriotic concern for the stability of our nation and for the welfare of our people.",
                "score": 0.716903,
                "arguments": [
                    {
                        "text": "president",
                        "location": [
                            3525,
                            3534
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "Zimbabwe",
                        "location": [
                            3538,
                            3546
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zimbabwe Herald"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.511327,
                "arguments": [
                    {
                        "text": "reporters",
                        "location": [
                            163,
                            172
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "reporters"
                            }
                        ]
                    },
                    {
                        "text": "media",
                        "location": [
                            157,
                            162
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "media",
                                "disambiguation": {
                                    "subtype": [
                                        "Commercial"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "I'm happy that throughout the short period the pillars of state remained functional.",
                "score": 0.568098,
                "arguments": [
                    {
                        "text": "pillars",
                        "location": [
                            3851,
                            3858
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "pillars"
                            }
                        ]
                    },
                    {
                        "text": "state",
                        "location": [
                            3862,
                            3867
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zanu-pf party"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "At the end of the speech, he said good night, and then he apologized for having said some things out of order and hoped that they could be corrected.",
                "score": 0.975873,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            4012,
                            4014
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "said",
                        "location": [
                            4015,
                            4019
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "At the end of the speech, he said good night, and then he apologized for having said some things out of order and hoped that they could be corrected.",
                "score": 0.994376,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            4041,
                            4043
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "apologized",
                        "location": [
                            4044,
                            4054
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "apologized"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOf",
                "sentence": "At the end of the speech, he said good night, and then he apologized for having said some things out of order and hoped that they could be corrected.",
                "score": 0.718886,
                "arguments": [
                    {
                        "text": "said",
                        "location": [
                            4066,
                            4070
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    },
                    {
                        "text": "apologized",
                        "location": [
                            4044,
                            4054
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "apologized"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOfMany",
                "sentence": "Opposition leader Morgan Tsvangirai was dumbstruck.",
                "score": 0.282201,
                "arguments": [
                    {
                        "text": "leader",
                        "location": [
                            4147,
                            4153
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Morgan Tsvangirai"
                            }
                        ]
                    },
                    {
                        "text": "Opposition",
                        "location": [
                            4136,
                            4146
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Opposition"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "participantIn",
                "sentence": "He's playing a game.",
                "score": 0.629711,
                "arguments": [
                    {
                        "text": "He",
                        "location": [
                            4244,
                            4246
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "game",
                        "location": [
                            4259,
                            4263
                        ],
                        "entities": [
                            {
                                "type": "SportingEvent",
                                "text": "game"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOfMany",
                "sentence": "He is trying to manipulate everyone.",
                "score": 0.71742,
                "arguments": [
                    {
                        "text": "He",
                        "location": [
                            4265,
                            4267
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "everyone",
                        "location": [
                            4292,
                            4300
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "everyone"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "He has let the whole nation down,\" he said.",
                "score": 0.984987,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            4337,
                            4339
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "said",
                        "location": [
                            4340,
                            4344
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "He has let the whole nation down,\" he said.",
                "score": 0.997188,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            5000,
                            5002
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "said",
                        "location": [
                            5003,
                            5007
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "Some people expressed sadness that 93-year-old Mugabe had skipped his chance to leave office with dignity, and instead would be humiliated by the events to come.",
                "score": 0.980903,
                "arguments": [
                    {
                        "text": "people",
                        "location": [
                            4351,
                            4357
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "people"
                            }
                        ]
                    },
                    {
                        "text": "expressed",
                        "location": [
                            4358,
                            4367
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "expressed"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "hasAttribute",
                "sentence": "Some people expressed sadness that 93-year-old Mugabe had skipped his chance to leave office with dignity, and instead would be humiliated by the events to come.",
                "score": 0.977585,
                "arguments": [
                    {
                        "text": "Mugabe",
                        "location": [
                            4393,
                            4399
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "93-year-old",
                        "location": [
                            4381,
                            4392
                        ],
                        "entities": [
                            {
                                "type": "Age",
                                "text": "93-year-old"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.64763,
                "arguments": [
                    {
                        "text": "reporter",
                        "location": [
                            224,
                            232
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "reporter"
                            }
                        ]
                    },
                    {
                        "text": "BBC",
                        "location": [
                            220,
                            223
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "BBC",
                                "disambiguation": {
                                    "subtype": [
                                        "Commercial"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "Some people expressed sadness that 93-year-old Mugabe had skipped his chance to leave office with dignity, and instead would be humiliated by the events to come.",
                "score": 0.812801,
                "arguments": [
                    {
                        "text": "his",
                        "location": [
                            4412,
                            4415
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "leave",
                        "location": [
                            4426,
                            4431
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "leave"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "managerOf",
                "sentence": "Some people expressed sadness that 93-year-old Mugabe had skipped his chance to leave office with dignity, and instead would be humiliated by the events to come.",
                "score": 0.453017,
                "arguments": [
                    {
                        "text": "his",
                        "location": [
                            4412,
                            4415
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "office",
                        "location": [
                            4432,
                            4438
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Herald\nThe Zimbabwean War Veterans Association"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "memberOf",
                "sentence": "Reuters and Zimbabwe Herald and Zimbabwe Herald The Zimbabwean War Veterans Association, otherwise known as the \"old guard,\" is the organization of veterans that won the war against Ian Smith, the white supremacist leader of Rhodesia, leading to independence of Zimbabwe in 1980.",
                "score": 0.361494,
                "arguments": [
                    {
                        "text": "veterans",
                        "location": [
                            4656,
                            4664
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Veterans"
                            }
                        ]
                    },
                    {
                        "text": "organization",
                        "location": [
                            4640,
                            4652
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Herald\nThe Zimbabwean War Veterans Association"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "timeOf",
                "sentence": "Reuters and Zimbabwe Herald and Zimbabwe Herald The Zimbabwean War Veterans Association, otherwise known as the \"old guard,\" is the organization of veterans that won the war against Ian Smith, the white supremacist leader of Rhodesia, leading to independence of Zimbabwe in 1980.",
                "score": 0.566856,
                "arguments": [
                    {
                        "text": "1980",
                        "location": [
                            4782,
                            4786
                        ],
                        "entities": [
                            {
                                "type": "Date",
                                "text": "1980"
                            }
                        ]
                    },
                    {
                        "text": "war",
                        "location": [
                            4678,
                            4681
                        ],
                        "entities": [
                            {
                                "type": "EventViolence",
                                "text": "War"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOfMany",
                "sentence": "Reuters and Zimbabwe Herald and Zimbabwe Herald The Zimbabwean War Veterans Association, otherwise known as the \"old guard,\" is the organization of veterans that won the war against Ian Smith, the white supremacist leader of Rhodesia, leading to independence of Zimbabwe in 1980.",
                "score": 0.395795,
                "arguments": [
                    {
                        "text": "leader",
                        "location": [
                            4723,
                            4729
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Ian Smith"
                            }
                        ]
                    },
                    {
                        "text": "supremacist",
                        "location": [
                            4711,
                            4722
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "supremacist"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "Reuters and Zimbabwe Herald and Zimbabwe Herald The Zimbabwean War Veterans Association, otherwise known as the \"old guard,\" is the organization of veterans that won the war against Ian Smith, the white supremacist leader of Rhodesia, leading to independence of Zimbabwe in 1980.",
                "score": 0.465826,
                "arguments": [
                    {
                        "text": "leader",
                        "location": [
                            4723,
                            4729
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Ian Smith"
                            }
                        ]
                    },
                    {
                        "text": "Rhodesia",
                        "location": [
                            4733,
                            4741
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Rhodesia",
                                "disambiguation": {
                                    "subtype": [
                                        "Commercial"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "Chris Mutsvangwa, the leader of the Zimbabwean War Veterans Association, said that Mugabe has a Monday noon deadline to resign, and then plans to impeach Mugabe would begin on Tuesday, as scheduled.",
                "score": 0.578234,
                "arguments": [
                    {
                        "text": "Chris Mutsvangwa",
                        "location": [
                            4788,
                            4804
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Chris Mutsvangwa"
                            }
                        ]
                    },
                    {
                        "text": "said",
                        "location": [
                            4861,
                            4865
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "Chris Mutsvangwa, the leader of the Zimbabwean War Veterans Association, said that Mugabe has a Monday noon deadline to resign, and then plans to impeach Mugabe would begin on Tuesday, as scheduled.",
                "score": 0.231842,
                "arguments": [
                    {
                        "text": "leader",
                        "location": [
                            4810,
                            4816
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Chris Mutsvangwa"
                            }
                        ]
                    },
                    {
                        "text": "Zimbabwean War Veterans Association",
                        "location": [
                            4824,
                            4859
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Herald\nThe Zimbabwean War Veterans Association"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "timeOf",
                "sentence": "Chris Mutsvangwa, the leader of the Zimbabwean War Veterans Association, said that Mugabe has a Monday noon deadline to resign, and then plans to impeach Mugabe would begin on Tuesday, as scheduled.",
                "score": 0.820663,
                "arguments": [
                    {
                        "text": "Monday noon",
                        "location": [
                            4884,
                            4895
                        ],
                        "entities": [
                            {
                                "type": "Date",
                                "text": "Monday noon"
                            }
                        ]
                    },
                    {
                        "text": "resign",
                        "location": [
                            4908,
                            4914
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "resignation"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "Furthermore, he said that people would take to the streets on Wednesday, hoping to replicate the events of Saturday, when hundreds of thousands of people were in the streets demanding that Mugabe step down.",
                "score": 0.637814,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            5000,
                            5002
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "streets",
                        "location": [
                            5038,
                            5045
                        ],
                        "entities": [
                            {
                                "type": "Facility",
                                "text": "streets"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.964996,
                "arguments": [
                    {
                        "text": "reporter",
                        "location": [
                            224,
                            232
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "reporter"
                            }
                        ]
                    },
                    {
                        "text": "said",
                        "location": [
                            233,
                            237
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "Furthermore, he said that people would take to the streets on Wednesday, hoping to replicate the events of Saturday, when hundreds of thousands of people were in the streets demanding that Mugabe step down.",
                "score": 0.5495,
                "arguments": [
                    {
                        "text": "people",
                        "location": [
                            5013,
                            5019
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "people"
                            }
                        ]
                    },
                    {
                        "text": "streets",
                        "location": [
                            5038,
                            5045
                        ],
                        "entities": [
                            {
                                "type": "Facility",
                                "text": "streets"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "Furthermore, he said that people would take to the streets on Wednesday, hoping to replicate the events of Saturday, when hundreds of thousands of people were in the streets demanding that Mugabe step down.",
                "score": 0.55172,
                "arguments": [
                    {
                        "text": "people",
                        "location": [
                            5134,
                            5140
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "people"
                            }
                        ]
                    },
                    {
                        "text": "streets",
                        "location": [
                            5153,
                            5160
                        ],
                        "entities": [
                            {
                                "type": "Facility",
                                "text": "streets"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "Furthermore, he said that people would take to the streets on Wednesday, hoping to replicate the events of Saturday, when hundreds of thousands of people were in the streets demanding that Mugabe step down.",
                "score": 0.309957,
                "arguments": [
                    {
                        "text": "demanding",
                        "location": [
                            5161,
                            5170
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "demanding"
                            }
                        ]
                    },
                    {
                        "text": "streets",
                        "location": [
                            5153,
                            5160
                        ],
                        "entities": [
                            {
                                "type": "Facility",
                                "text": "streets"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "Furthermore, he said that people would take to the streets on Wednesday, hoping to replicate the events of Saturday, when hundreds of thousands of people were in the streets demanding that Mugabe step down.",
                "score": 0.521081,
                "arguments": [
                    {
                        "text": "Mugabe",
                        "location": [
                            5176,
                            5182
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "step down",
                        "location": [
                            5183,
                            5192
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "step down"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "However, some analysts are saying that the plans to impeach Mugabe are fraught with complications.",
                "score": 0.939734,
                "arguments": [
                    {
                        "text": "analysts",
                        "location": [
                            5208,
                            5216
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "analysts"
                            }
                        ]
                    },
                    {
                        "text": "saying",
                        "location": [
                            5221,
                            5227
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "saying"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "One problem is that there may not be sufficiently severe charges to justify impeachment in the eyes of some members of the parliament.",
                "score": 0.46965,
                "arguments": [
                    {
                        "text": "members",
                        "location": [
                            5401,
                            5408
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "members"
                            }
                        ]
                    },
                    {
                        "text": "impeachment",
                        "location": [
                            5369,
                            5380
                        ],
                        "entities": [
                            {
                                "type": "EventLegal",
                                "text": "impeachment"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "memberOf",
                "sentence": "One problem is that there may not be sufficiently severe charges to justify impeachment in the eyes of some members of the parliament.",
                "score": 0.576357,
                "arguments": [
                    {
                        "text": "members",
                        "location": [
                            5401,
                            5408
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "members"
                            }
                        ]
                    },
                    {
                        "text": "parliament",
                        "location": [
                            5416,
                            5426
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "parliament",
                                "disambiguation": {
                                    "subtype": [
                                        "Government"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "But Mugabe recently fired Mnangagwa as vice president, with the objective of replacing him with his own wife Grace Mugabe, who would then succeed him.",
                "score": 0.869676,
                "arguments": [
                    {
                        "text": "Mugabe",
                        "location": [
                            5595,
                            5601
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "fired",
                        "location": [
                            5611,
                            5616
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "fired"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "But Mugabe recently fired Mnangagwa as vice president, with the objective of replacing him with his own wife Grace Mugabe, who would then succeed him.",
                "score": 0.947155,
                "arguments": [
                    {
                        "text": "Mnangagwa",
                        "location": [
                            5617,
                            5626
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Cde E. D. Mnangagwa"
                            }
                        ]
                    },
                    {
                        "text": "fired",
                        "location": [
                            5611,
                            5616
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "fired"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "But Mugabe recently fired Mnangagwa as vice president, with the objective of replacing him with his own wife Grace Mugabe, who would then succeed him.",
                "score": 0.857374,
                "arguments": [
                    {
                        "text": "him",
                        "location": [
                            5678,
                            5681
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "replacing",
                        "location": [
                            5668,
                            5677
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "replacing"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "timeOf",
                "sentence": "This morning's key headlines from GenerationalDynamics.com   Robert Mugabe, giving his speech on Sunday The people of Zimbabwe, as well as the international media reporters, were uniformly stunned (or gobsmacked, as one BBC reporter said) by Sunday's events, that were incredible even by the standards of Zimbabwe.",
                "score": 0.883052,
                "arguments": [
                    {
                        "text": "Sunday",
                        "location": [
                            242,
                            248
                        ],
                        "entities": [
                            {
                                "type": "Date",
                                "text": "Sunday"
                            }
                        ]
                    },
                    {
                        "text": "said",
                        "location": [
                            233,
                            237
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "said"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "affectedBy",
                "sentence": "So Mnangagwa could not become vice-president unless Mugabe could be convinced to reinstate him prior to being impeached and convicted.",
                "score": 0.663152,
                "arguments": [
                    {
                        "text": "him",
                        "location": [
                            5833,
                            5836
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "convicted",
                        "location": [
                            5866,
                            5875
                        ],
                        "entities": [
                            {
                                "type": "EventLegal",
                                "text": "convicted"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "However, if you look again at the Zanu-pf statement quoted above, Mphoko is accused of \"being divisive, a member of the cabal, protecting criminals, preaching hate speech and behaving in a manner inconsistent with the Office and decorum of the Office.",
                "score": 0.799091,
                "arguments": [
                    {
                        "text": "Mphoko",
                        "location": [
                            6049,
                            6055
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "Cde Phelekezela Mphoko"
                            }
                        ]
                    },
                    {
                        "text": "accused",
                        "location": [
                            6059,
                            6066
                        ],
                        "entities": [
                            {
                                "type": "EventLegal",
                                "text": "accused"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "Mugabe was undoubtedly aware of all this when he refused to resign.",
                "score": 0.996636,
                "arguments": [
                    {
                        "text": "he",
                        "location": [
                            6435,
                            6437
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "refused",
                        "location": [
                            6438,
                            6445
                        ],
                        "entities": [
                            {
                                "type": "EventCommunication",
                                "text": "refused"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "locatedAt",
                "sentence": "Australian Broadcasting and Guardian (London) and The Nation (Kenya) KEYS: Generational Dynamics, Harare, Robert Mugabe, Zanu-pf, Grace Ntombizodwa Mugabe, African Union, Southern Africa Democratic Development Community, SADC, Emmerson Dambudzo Mnangagwa, Phelekezela Mphoko, Zimbabwe War Veterans' Association, Chris Mutsvangwa   Permanent web link to this article",
                "score": 0.35707,
                "arguments": [
                    {
                        "text": "The Nation",
                        "location": [
                            6746,
                            6756
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "The Nation"
                            }
                        ]
                    },
                    {
                        "text": "Kenya",
                        "location": [
                            6758,
                            6763
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Kenya",
                                "disambiguation": {
                                    "subtype": [
                                        "Country"
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "type": "partOf",
                "sentence": "Australian Broadcasting and Guardian (London) and The Nation (Kenya) KEYS: Generational Dynamics, Harare, Robert Mugabe, Zanu-pf, Grace Ntombizodwa Mugabe, African Union, Southern Africa Democratic Development Community, SADC, Emmerson Dambudzo Mnangagwa, Phelekezela Mphoko, Zimbabwe War Veterans' Association, Chris Mutsvangwa   Permanent web link to this article",
                "score": 0.67492,
                "arguments": [
                    {
                        "text": "Association",
                        "location": [
                            6995,
                            7006
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Herald\nThe Zimbabwean War Veterans Association"
                            }
                        ]
                    },
                    {
                        "text": "Zimbabwe",
                        "location": [
                            6972,
                            6980
                        ],
                        "entities": [
                            {
                                "type": "GeopoliticalEntity",
                                "text": "Zimbabwe Herald"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "employedBy",
                "sentence": "First, as expected, the governing party of President Robert Mugabe's governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "score": 0.280254,
                "arguments": [
                    {
                        "text": "Robert Mugabe",
                        "location": [
                            368,
                            381
                        ],
                        "entities": [
                            {
                                "type": "Person",
                                "text": "GenerationalDynamics.com \n Robert Mugabe"
                            }
                        ]
                    },
                    {
                        "text": "Zanu-pf party",
                        "location": [
                            394,
                            407
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Zanu-pf party"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "agentOf",
                "sentence": "First, as expected, the governing party of President Robert Mugabe's governing Zanu-pf party voted to expel him from the party and to demand his resignation.",
                "score": 0.49502,
                "arguments": [
                    {
                        "text": "Zanu-pf party",
                        "location": [
                            394,
                            407
                        ],
                        "entities": [
                            {
                                "type": "Organization",
                                "text": "Zanu-pf party"
                            }
                        ]
                    },
                    {
                        "text": "resignation",
                        "location": [
                            460,
                            471
                        ],
                        "entities": [
                            {
                                "type": "EventPersonnel",
                                "text": "resignation"
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata": {
            "title": "Robert Mugabe Stuns Zimbabwe by Refusing to Step Down",
            "publication_date": "2017-11-20T00:00:00",
            "image": "http://media.breitbart.com/media/2017/02/wi/ap/24/l3d62h-e1511184668218.jpg",
            "feeds": [
                {
                    "link": "http://feeds.feedburner.com/breitbart"
                }
            ],
            "authors": [
                {
                    "name": "John J. Xenakis"
                },
                {
                    "name": "John J. Xenakis 20 Nov 2017 0"
                }
            ]
        },
        "language": "en",
        "keywords": [
            {
                "text": "Mugabe",
                "sentiment": {
                    "score": -0.0644245,
                    "label": "negative"
                },
                "relevance": 0.910321,
                "emotion": {
                    "sadness": 0.578222,
                    "joy": 0.451527,
                    "fear": 0.136369,
                    "disgust": 0.552236,
                    "anger": 0.535403
                }
            },
            {
                "text": "Cde R.G. Mugabe",
                "sentiment": {
                    "score": -0.400381,
                    "label": "negative"
                },
                "relevance": 0.897465,
                "emotion": {
                    "sadness": 0.075838,
                    "joy": 0.387694,
                    "fear": 0.220293,
                    "disgust": 0.234778,
                    "anger": 0.232954
                }
            },
            {
                "text": "President Robert Mugabe",
                "sentiment": {
                    "score": -0.346294,
                    "label": "negative"
                },
                "relevance": 0.765312
            },
            {
                "text": "Grace Ntombizodwa Mugabe",
                "sentiment": {
                    "score": 0.422331,
                    "label": "positive"
                },
                "relevance": 0.663799,
                "emotion": {
                    "sadness": 0.033222,
                    "joy": 0.569223,
                    "fear": 0.021408,
                    "disgust": 0.002248,
                    "anger": 0.116675
                }
            },
            {
                "text": "wife Grace Mugabe",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.657721,
                "emotion": {
                    "sadness": 0.170345,
                    "joy": 0.386534,
                    "fear": 0.015982,
                    "disgust": 0.016107,
                    "anger": 0.21112
                }
            },
            {
                "text": "93-year-old Mugabe",
                "sentiment": {
                    "score": -0.620148,
                    "label": "negative"
                },
                "relevance": 0.629927,
                "emotion": {
                    "sadness": 0.73672,
                    "joy": 0.037858,
                    "fear": 0.033486,
                    "disgust": 0.138026,
                    "anger": 0.24126
                }
            },
            {
                "text": "Emmerson Dambudzo Mnangagwa",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.577502,
                "emotion": {
                    "sadness": 0.158425,
                    "joy": 0.395288,
                    "fear": 0.055996,
                    "disgust": 0.134453,
                    "anger": 0.255545
                }
            },
            {
                "text": "Zimbabwe War Veterans",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.5625,
                "emotion": {
                    "sadness": 0.268742,
                    "joy": 0.193542,
                    "fear": 0.122144,
                    "disgust": 0.243173,
                    "anger": 0.230338
                }
            },
            {
                "text": "Extraordinary Congress",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.560214,
                "emotion": {
                    "sadness": 0.222802,
                    "joy": 0.547765,
                    "fear": 0.11371,
                    "disgust": 0.073125,
                    "anger": 0.101826
                }
            },
            {
                "text": "Zimbabwean War Veterans",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.558487,
                "emotion": {
                    "sadness": 0.076345,
                    "joy": 0.183914,
                    "fear": 0.187507,
                    "disgust": 0.543799,
                    "anger": 0.097304
                }
            },
            {
                "text": "vice president",
                "sentiment": {
                    "score": -0.360676,
                    "label": "negative"
                },
                "relevance": 0.557474,
                "emotion": {
                    "sadness": 0.298389,
                    "joy": 0.239188,
                    "fear": 0.059,
                    "disgust": 0.281446,
                    "anger": 0.195204
                }
            },
            {
                "text": "War Veterans Association",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.553494,
                "emotion": {
                    "sadness": 0.076345,
                    "joy": 0.183914,
                    "fear": 0.187507,
                    "disgust": 0.543799,
                    "anger": 0.097304
                }
            },
            {
                "text": "Zimbabwe Amendment Number",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.553102,
                "emotion": {
                    "sadness": 0.209142,
                    "joy": 0.17774,
                    "fear": 0.071067,
                    "disgust": 0.223143,
                    "anger": 0.067953
                }
            },
            {
                "text": "Phelekezela Mphoko",
                "sentiment": {
                    "score": -0.428874,
                    "label": "negative"
                },
                "relevance": 0.549436,
                "emotion": {
                    "sadness": 0.190584,
                    "joy": 0.116464,
                    "fear": 0.06617,
                    "disgust": 0.258604,
                    "anger": 0.14293
                }
            },
            {
                "text": "Zanu-pf statement",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.544826,
                "emotion": {
                    "sadness": 0.19887,
                    "joy": 0.632141,
                    "fear": 0.06378,
                    "disgust": 0.070862,
                    "anger": 0.055378
                }
            },
            {
                "text": "Cde ED Mnangagwa",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.534445,
                "emotion": {
                    "sadness": 0.074952,
                    "joy": 0.174297,
                    "fear": 0.032842,
                    "disgust": 0.119836,
                    "anger": 0.114039
                }
            },
            {
                "text": "Cde Lovemore Matuke",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.53434,
                "emotion": {
                    "sadness": 0.141719,
                    "joy": 0.191139,
                    "fear": 0.08519,
                    "disgust": 0.078108,
                    "anger": 0.091797
                }
            },
            {
                "text": "Cde E. D.",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.533759,
                "emotion": {
                    "sadness": 0.390966,
                    "joy": 0.28554,
                    "fear": 0.074082,
                    "disgust": 0.087518,
                    "anger": 0.091452
                }
            },
            {
                "text": "Cde Phelekezela Mphoko",
                "sentiment": {
                    "score": -0.428874,
                    "label": "negative"
                },
                "relevance": 0.533554,
                "emotion": {
                    "sadness": 0.204109,
                    "joy": 0.099997,
                    "fear": 0.074003,
                    "disgust": 0.244969,
                    "anger": 0.133274
                }
            },
            {
                "text": "Zimbabwe Herald",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.522801,
                "emotion": {
                    "sadness": 0.137063,
                    "joy": 0.199874,
                    "fear": 0.079931,
                    "disgust": 0.122193,
                    "anger": 0.095736
                }
            },
            {
                "text": "Zanu-pf Central Committee",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.518423,
                "emotion": {
                    "sadness": 0.03495,
                    "joy": 0.257641,
                    "fear": 0.065589,
                    "disgust": 0.04494,
                    "anger": 0.141233
                }
            },
            {
                "text": "international media reporters",
                "sentiment": {
                    "score": 0.347275,
                    "label": "positive"
                },
                "relevance": 0.505329,
                "emotion": {
                    "sadness": 0.185196,
                    "joy": 0.469882,
                    "fear": 0.08142,
                    "disgust": 0.03375,
                    "anger": 0.069511
                }
            },
            {
                "text": "army generals",
                "sentiment": {
                    "score": -0.50012,
                    "label": "negative"
                },
                "relevance": 0.50331,
                "emotion": {
                    "sadness": 0.178886,
                    "joy": 0.131707,
                    "fear": 0.184778,
                    "disgust": 0.62882,
                    "anger": 0.138075
                }
            },
            {
                "text": "dozen army generals",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.499595,
                "emotion": {
                    "sadness": 0.228345,
                    "joy": 0.154295,
                    "fear": 0.14546,
                    "disgust": 0.228748,
                    "anger": 0.333157
                }
            },
            {
                "text": "hate speech",
                "sentiment": {
                    "score": -0.468367,
                    "label": "negative"
                },
                "relevance": 0.498762,
                "emotion": {
                    "sadness": 0.099472,
                    "joy": 0.026348,
                    "fear": 0.099652,
                    "disgust": 0.280782,
                    "anger": 0.696654
                }
            },
            {
                "text": "State President",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.493611,
                "emotion": {
                    "sadness": 0.390966,
                    "joy": 0.28554,
                    "fear": 0.074082,
                    "disgust": 0.087518,
                    "anger": 0.091452
                }
            },
            {
                "text": "white supremacist leader",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.491575,
                "emotion": {
                    "sadness": 0.073766,
                    "joy": 0.172824,
                    "fear": 0.072246,
                    "disgust": 0.544558,
                    "anger": 0.106551
                }
            },
            {
                "text": "Zimbabwe’s constitution",
                "sentiment": {
                    "score": -0.658955,
                    "label": "negative"
                },
                "relevance": 0.490232,
                "emotion": {
                    "sadness": 0.370939,
                    "joy": 0.249302,
                    "fear": 0.072909,
                    "disgust": 0.114286,
                    "anger": 0.044261
                }
            },
            {
                "text": "leader Morgan Tsvangirai",
                "sentiment": {
                    "score": -0.315508,
                    "label": "negative"
                },
                "relevance": 0.489799,
                "emotion": {
                    "sadness": 0.100176,
                    "joy": 0.206533,
                    "fear": 0.129223,
                    "disgust": 0.280522,
                    "anger": 0.126375
                }
            },
            {
                "text": "Southern African Development",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.48835,
                "emotion": {
                    "sadness": 0.377079,
                    "joy": 0.187901,
                    "fear": 0.03056,
                    "disgust": 0.029176,
                    "anger": 0.151496
                }
            },
            {
                "text": "Permanent web link",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.487904,
                "emotion": {
                    "sadness": 0.379345,
                    "joy": 0.195064,
                    "fear": 0.075022,
                    "disgust": 0.064719,
                    "anger": 0.068943
                }
            },
            {
                "text": "entire impeachment process",
                "sentiment": {
                    "score": -0.800033,
                    "label": "negative"
                },
                "relevance": 0.48722,
                "emotion": {
                    "sadness": 0.591095,
                    "joy": 0.044793,
                    "fear": 0.170101,
                    "disgust": 0.071892,
                    "anger": 0.159376
                }
            },
            {
                "text": "Development Community",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.486608,
                "emotion": {
                    "sadness": 0.380152,
                    "joy": 0.206765,
                    "fear": 0.025106,
                    "disgust": 0.050707,
                    "anger": 0.140453
                }
            },
            {
                "text": "Africa Democratic Development",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.486046,
                "emotion": {
                    "sadness": 0.310688,
                    "joy": 0.189676,
                    "fear": 0.037124,
                    "disgust": 0.111012,
                    "anger": 0.079536
                }
            },
            {
                "text": "African Union",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.485105,
                "emotion": {
                    "sadness": 0.399741,
                    "joy": 0.185272,
                    "fear": 0.026645,
                    "disgust": 0.034298,
                    "anger": 0.168304
                }
            },
            {
                "text": "Monday noon deadline",
                "sentiment": {
                    "score": -0.487766,
                    "label": "negative"
                },
                "relevance": 0.483884,
                "emotion": {
                    "sadness": 0.242119,
                    "joy": 0.058252,
                    "fear": 0.494093,
                    "disgust": 0.046835,
                    "anger": 0.34996
                }
            },
            {
                "text": "Zanu-pf party",
                "sentiment": {
                    "score": -0.346294,
                    "label": "negative"
                },
                "relevance": 0.474255,
                "emotion": {
                    "sadness": 0.104403,
                    "joy": 0.326797,
                    "fear": 0.021351,
                    "disgust": 0.214381,
                    "anger": 0.306406
                }
            },
            {
                "text": "people",
                "sentiment": {
                    "score": -0.538911,
                    "label": "negative"
                },
                "relevance": 0.460588,
                "emotion": {
                    "sadness": 0.648972,
                    "joy": 0.22573,
                    "fear": 0.097718,
                    "disgust": 0.131012,
                    "anger": 0.164317
                }
            },
            {
                "text": "key headlines",
                "sentiment": {
                    "score": 0.431327,
                    "label": "positive"
                },
                "relevance": 0.460188,
                "emotion": {
                    "sadness": 0.127867,
                    "joy": 0.596426,
                    "fear": 0.063329,
                    "disgust": 0.01646,
                    "anger": 0.139331
                }
            },
            {
                "text": "Sunday’s events",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.458863,
                "emotion": {
                    "sadness": 0.106849,
                    "joy": 0.665839,
                    "fear": 0.033655,
                    "disgust": 0.017346,
                    "anger": 0.030651
                }
            },
            {
                "text": "BBC reporter",
                "sentiment": {
                    "score": -0.299387,
                    "label": "negative"
                },
                "relevance": 0.45679,
                "emotion": {
                    "sadness": 0.27375,
                    "joy": 0.179119,
                    "fear": 0.105247,
                    "disgust": 0.228508,
                    "anger": 0.14715
                }
            },
            {
                "text": "historic solidarity",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.454685,
                "emotion": {
                    "sadness": 0.258293,
                    "joy": 0.191248,
                    "fear": 0.115354,
                    "disgust": 0.19183,
                    "anger": 0.201404
                }
            },
            {
                "text": "party rules",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.453916,
                "emotion": {
                    "sadness": 0.151091,
                    "joy": 0.582063,
                    "fear": 0.045,
                    "disgust": 0.054185,
                    "anger": 0.046873
                }
            },
            {
                "text": "numerous reports",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.453444,
                "emotion": {
                    "sadness": 0.018784,
                    "joy": 0.169512,
                    "fear": 0.063865,
                    "disgust": 0.040589,
                    "anger": 0.060171
                }
            },
            {
                "text": "conference room",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.453053,
                "emotion": {
                    "sadness": 0.228345,
                    "joy": 0.154295,
                    "fear": 0.14546,
                    "disgust": 0.228748,
                    "anger": 0.333157
                }
            },
            {
                "text": "halting manner",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.452893,
                "emotion": {
                    "sadness": 0.220493,
                    "joy": 0.1355,
                    "fear": 0.18639,
                    "disgust": 0.224569,
                    "anger": 0.40354
                }
            },
            {
                "text": "social media",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.452714,
                "emotion": {
                    "sadness": 0.018023,
                    "joy": 0.211623,
                    "fear": 0.040323,
                    "disgust": 0.082602,
                    "anger": 0.051681
                }
            },
            {
                "text": "short period",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.451427,
                "emotion": {
                    "sadness": 0.120728,
                    "joy": 0.458308,
                    "fear": 0.105113,
                    "disgust": 0.042123,
                    "anger": 0.025126
                }
            },
            {
                "text": "sub paragraph",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.451279,
                "emotion": {
                    "sadness": 0.209142,
                    "joy": 0.17774,
                    "fear": 0.071067,
                    "disgust": 0.223143,
                    "anger": 0.067953
                }
            },
            {
                "text": "little doubt",
                "sentiment": {
                    "score": -0.50012,
                    "label": "negative"
                },
                "relevance": 0.451105,
                "emotion": {
                    "sadness": 0.161621,
                    "joy": 0.112058,
                    "fear": 0.190888,
                    "disgust": 0.719066,
                    "anger": 0.053986
                }
            }
        ],
        "entities": [
            {
                "type": "Person",
                "text": "Cde R.G. Mugabe",
                "sentiment": {
                    "score": -0.486756,
                    "label": "negative"
                },
                "relevance": 0.855751,
                "emotion": {
                    "sadness": 0.215395,
                    "joy": 0.167082,
                    "fear": 0.15595,
                    "disgust": 0.157522,
                    "anger": 0.209756
                },
                "count": 19
            },
            {
                "type": "Location",
                "text": "Zimbabwe",
                "sentiment": {
                    "score": -0.442816,
                    "label": "negative"
                },
                "relevance": 0.32167,
                "emotion": {
                    "sadness": 0.20398,
                    "joy": 0.640148,
                    "fear": 0.141013,
                    "disgust": 0.180145,
                    "anger": 0.140942
                },
                "disambiguation": {
                    "subtype": [
                        "PoliticalDistrict",
                        "AdministrativeDivision",
                        "GovernmentalJurisdiction",
                        "Country"
                    ],
                    "name": "Zimbabwe",
                    "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe"
                },
                "count": 8
            },
            {
                "type": "JobTitle",
                "text": "President",
                "sentiment": {
                    "score": -0.307704,
                    "label": "negative"
                },
                "relevance": 0.288201,
                "emotion": {
                    "sadness": 0.164951,
                    "joy": 0.43913,
                    "fear": 0.087167,
                    "disgust": 0.126835,
                    "anger": 0.138011
                },
                "count": 9
            },
            {
                "type": "Person",
                "text": "Robert Mugabe",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.257691,
                "emotion": {
                    "sadness": 0.105817,
                    "joy": 0.133681,
                    "fear": 0.086653,
                    "disgust": 0.079166,
                    "anger": 0.074561
                },
                "disambiguation": {
                    "subtype": [
                        "Politician",
                        "President"
                    ],
                    "name": "Robert Mugabe",
                    "dbpedia_resource": "http://dbpedia.org/resource/Robert_Mugabe"
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Zanu-PF",
                "sentiment": {
                    "score": -0.387584,
                    "label": "negative"
                },
                "relevance": 0.246689,
                "emotion": {
                    "sadness": 0.145212,
                    "joy": 0.54508,
                    "fear": 0.066836,
                    "disgust": 0.14234,
                    "anger": 0.116075
                },
                "disambiguation": {
                    "subtype": [
                        "PoliticalParty"
                    ],
                    "name": "Zimbabwe African National Union – Patriotic Front",
                    "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
                },
                "count": 8
            },
            {
                "type": "Person",
                "text": "Grace Ntombizodwa Mugabe",
                "sentiment": {
                    "score": 0.422331,
                    "label": "positive"
                },
                "relevance": 0.235721,
                "emotion": {
                    "sadness": 0.033222,
                    "joy": 0.569223,
                    "fear": 0.021408,
                    "disgust": 0.002248,
                    "anger": 0.116675
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Zimbabwe War Veterans’ Association",
                "sentiment": {
                    "score": -0.231744,
                    "label": "negative"
                },
                "relevance": 0.211732,
                "emotion": {
                    "sadness": 0,
                    "joy": 0,
                    "fear": 0,
                    "disgust": 0,
                    "anger": 0
                },
                "count": 2
            },
            {
                "type": "Person",
                "text": "Cde Phelekezela Mphoko",
                "sentiment": {
                    "score": -0.387872,
                    "label": "negative"
                },
                "relevance": 0.192411,
                "emotion": {
                    "sadness": 0.120929,
                    "joy": 0.039582,
                    "fear": 0.026048,
                    "disgust": 0.391887,
                    "anger": 0.543257
                },
                "disambiguation": {
                    "subtype": [],
                    "name": "Phelekezela Mphoko",
                    "dbpedia_resource": "http://dbpedia.org/resource/Phelekezela_Mphoko"
                },
                "count": 4
            },
            {
                "type": "JobTitle",
                "text": "President and First Secretary",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.175468,
                "emotion": {
                    "sadness": 0.100198,
                    "joy": 0.252134,
                    "fear": 0.119099,
                    "disgust": 0.229237,
                    "anger": 0.124556
                },
                "count": 1
            },
            {
                "type": "JobTitle",
                "text": "Vice President and Second Secretary",
                "sentiment": {
                    "score": -0.428874,
                    "label": "negative"
                },
                "relevance": 0.170084,
                "emotion": {
                    "sadness": 0.204109,
                    "joy": 0.099997,
                    "fear": 0.074003,
                    "disgust": 0.244969,
                    "anger": 0.133274
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "army",
                "sentiment": {
                    "score": -0.397299,
                    "label": "negative"
                },
                "relevance": 0.160846,
                "emotion": {
                    "sadness": 0.39695,
                    "joy": 0.021963,
                    "fear": 0.164547,
                    "disgust": 0.132211,
                    "anger": 0.529966
                },
                "count": 3
            },
            {
                "type": "Person",
                "text": "Emmerson Dambudzo Mnangagwa",
                "sentiment": {
                    "score": -0.505,
                    "label": "negative"
                },
                "relevance": 0.158759,
                "emotion": {
                    "sadness": 0.168232,
                    "joy": 0.299544,
                    "fear": 0.019442,
                    "disgust": 0.167619,
                    "anger": 0.437006
                },
                "disambiguation": {
                    "subtype": [
                        "OfficeHolder"
                    ],
                    "name": "Emmerson Mnangagwa",
                    "dbpedia_resource": "http://dbpedia.org/resource/Emmerson_Mnangagwa"
                },
                "count": 5
            },
            {
                "type": "Person",
                "text": "Cde E. D. Mnangagwa",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.156642,
                "emotion": {
                    "sadness": 0.390966,
                    "joy": 0.28554,
                    "fear": 0.074082,
                    "disgust": 0.087518,
                    "anger": 0.091452
                },
                "count": 1
            },
            {
                "type": "JobTitle",
                "text": "President and Head of State and Government",
                "sentiment": {
                    "score": -0.400381,
                    "label": "negative"
                },
                "relevance": 0.149152,
                "emotion": {
                    "sadness": 0.09716,
                    "joy": 0.13222,
                    "fear": 0.397771,
                    "disgust": 0.194584,
                    "anger": 0.274787
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Zanu-pf Central Committee",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.148709,
                "emotion": {
                    "sadness": 0.03495,
                    "joy": 0.257641,
                    "fear": 0.065589,
                    "disgust": 0.04494,
                    "anger": 0.141233
                },
                "count": 1
            },
            {
                "type": "PrintMedia",
                "text": "Zimbabwe Herald",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.146076,
                "emotion": {
                    "sadness": 0.121828,
                    "joy": 0.240759,
                    "fear": 0.069002,
                    "disgust": 0.125706,
                    "anger": 0.105778
                },
                "count": 2
            },
            {
                "type": "JobTitle",
                "text": "vice president",
                "sentiment": {
                    "score": -0.292479,
                    "label": "negative"
                },
                "relevance": 0.13845,
                "emotion": {
                    "sadness": 0.30753,
                    "joy": 0.317662,
                    "fear": 0.056209,
                    "disgust": 0.207765,
                    "anger": 0.189125
                },
                "count": 2
            },
            {
                "type": "Organization",
                "text": "Zimbabwean War Veterans Association",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.124714,
                "emotion": {
                    "sadness": 0.076345,
                    "joy": 0.183914,
                    "fear": 0.187507,
                    "disgust": 0.543799,
                    "anger": 0.097304
                },
                "count": 2
            },
            {
                "type": "Person",
                "text": "Chris Mutsvangwa",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.122124,
                "emotion": {
                    "sadness": 0.258103,
                    "joy": 0.122474,
                    "fear": 0.032317,
                    "disgust": 0.337995,
                    "anger": 0.099898
                },
                "count": 2
            },
            {
                "type": "Organization",
                "text": "Extraordinary Congress",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.118855,
                "emotion": {
                    "sadness": 0.3878,
                    "joy": 0.38091,
                    "fear": 0.135192,
                    "disgust": 0.092473,
                    "anger": 0.086052
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Central Committee",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.118671,
                "emotion": {
                    "sadness": 0.258293,
                    "joy": 0.191248,
                    "fear": 0.115354,
                    "disgust": 0.19183,
                    "anger": 0.201404
                },
                "disambiguation": {
                    "subtype": [
                        "GovernmentalBody"
                    ],
                    "name": "Central Committee of the Communist Party of the Soviet Union",
                    "dbpedia_resource": "http://dbpedia.org/resource/Central_Committee_of_the_Communist_Party_of_the_Soviet_Union"
                },
                "count": 1
            },
            {
                "type": "JobTitle",
                "text": "First Secretary",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.116577,
                "emotion": {
                    "sadness": 0.08041,
                    "joy": 0.47886,
                    "fear": 0.067683,
                    "disgust": 0.18193,
                    "anger": 0.149556
                },
                "count": 2
            },
            {
                "type": "Person",
                "text": "Morgan Tsvangirai",
                "sentiment": {
                    "score": -0.315508,
                    "label": "negative"
                },
                "relevance": 0.112936,
                "emotion": {
                    "sadness": 0.100176,
                    "joy": 0.206533,
                    "fear": 0.129223,
                    "disgust": 0.280522,
                    "anger": 0.126375
                },
                "disambiguation": {
                    "subtype": [
                        "Politician",
                        "AwardWinner",
                        "OfficeHolder"
                    ],
                    "name": "Morgan Tsvangirai",
                    "dbpedia_resource": "http://dbpedia.org/resource/Morgan_Tsvangirai"
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Congress",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.112778,
                "emotion": {
                    "sadness": 0.15686,
                    "joy": 0.57085,
                    "fear": 0.119043,
                    "disgust": 0.054985,
                    "anger": 0.106462
                },
                "count": 2
            },
            {
                "type": "Organization",
                "text": "congress",
                "sentiment": {
                    "score": -0.492138,
                    "label": "negative"
                },
                "relevance": 0.111955,
                "emotion": {
                    "sadness": 0.455402,
                    "joy": 0.040315,
                    "fear": 0.180408,
                    "disgust": 0.161204,
                    "anger": 0.164509
                },
                "count": 1
            },
            {
                "type": "JobTitle",
                "text": "reporter",
                "sentiment": {
                    "score": -0.299387,
                    "label": "negative"
                },
                "relevance": 0.109248,
                "emotion": {
                    "sadness": 0.27375,
                    "joy": 0.179119,
                    "fear": 0.105247,
                    "disgust": 0.228508,
                    "anger": 0.14715
                },
                "count": 1
            },
            {
                "type": "Company",
                "text": "BBC",
                "sentiment": {
                    "score": -0.299387,
                    "label": "negative"
                },
                "relevance": 0.108172,
                "emotion": {
                    "sadness": 0.27375,
                    "joy": 0.179119,
                    "fear": 0.105247,
                    "disgust": 0.228508,
                    "anger": 0.14715
                },
                "count": 1
            },
            {
                "type": "Location",
                "text": "London",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.10798,
                "emotion": {
                    "sadness": 0,
                    "joy": 0,
                    "fear": 0,
                    "disgust": 0,
                    "anger": 0
                },
                "disambiguation": {
                    "subtype": [
                        "AdministrativeDivision",
                        "GovernmentalJurisdiction",
                        "OlympicHostCity",
                        "PlaceWithNeighborhoods",
                        "City"
                    ],
                    "name": "London",
                    "dbpedia_resource": "http://dbpedia.org/resource/London"
                },
                "count": 1
            },
            {
                "type": "Location",
                "text": "Harare",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.106983,
                "emotion": {
                    "sadness": 0,
                    "joy": 0,
                    "fear": 0,
                    "disgust": 0,
                    "anger": 0
                },
                "disambiguation": {
                    "subtype": [
                        "AdministrativeDivision",
                        "City"
                    ],
                    "name": "Harare",
                    "dbpedia_resource": "http://dbpedia.org/resource/Harare"
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "African Union",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.105785,
                "emotion": {
                    "sadness": 0.399741,
                    "joy": 0.185272,
                    "fear": 0.026645,
                    "disgust": 0.034298,
                    "anger": 0.168304
                },
                "disambiguation": {
                    "subtype": [],
                    "name": "African Union",
                    "dbpedia_resource": "http://dbpedia.org/resource/African_Union"
                },
                "count": 2
            },
            {
                "type": "Company",
                "text": "Reuters",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.105304,
                "emotion": {
                    "sadness": 0.137063,
                    "joy": 0.199874,
                    "fear": 0.079931,
                    "disgust": 0.122193,
                    "anger": 0.095736
                },
                "disambiguation": {
                    "subtype": [],
                    "name": "Reuters",
                    "dbpedia_resource": "http://dbpedia.org/resource/Reuters"
                },
                "count": 1
            },
            {
                "type": "Location",
                "text": "Kenya",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.105167,
                "emotion": {
                    "sadness": 0,
                    "joy": 0,
                    "fear": 0,
                    "disgust": 0,
                    "anger": 0
                },
                "disambiguation": {
                    "subtype": [
                        "GovernmentalJurisdiction",
                        "BoardMember",
                        "Country"
                    ],
                    "name": "Kenya",
                    "dbpedia_resource": "http://dbpedia.org/resource/Kenya"
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Southern African Development Community",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.105051,
                "emotion": {
                    "sadness": 0.38448,
                    "joy": 0.182946,
                    "fear": 0.03135,
                    "disgust": 0.030445,
                    "anger": 0.177071
                },
                "disambiguation": {
                    "subtype": [],
                    "name": "Southern African Development Community",
                    "dbpedia_resource": "http://dbpedia.org/resource/Southern_African_Development_Community"
                },
                "count": 3
            },
            {
                "type": "Location",
                "text": "Rhodesia",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.0995226,
                "emotion": {
                    "sadness": 0.073766,
                    "joy": 0.172824,
                    "fear": 0.072246,
                    "disgust": 0.544558,
                    "anger": 0.106551
                },
                "disambiguation": {
                    "subtype": [
                        "Country"
                    ],
                    "name": "Rhodesia",
                    "dbpedia_resource": "http://dbpedia.org/resource/Rhodesia"
                },
                "count": 1
            },
            {
                "type": "Person",
                "text": "Ian Smith",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.0982994,
                "emotion": {
                    "sadness": 0.170954,
                    "joy": 0.304754,
                    "fear": 0.174785,
                    "disgust": 0.2539,
                    "anger": 0.176132
                },
                "disambiguation": {
                    "subtype": [
                        "Politician",
                        "MilitaryPerson"
                    ],
                    "name": "Ian Smith",
                    "dbpedia_resource": "http://dbpedia.org/resource/Ian_Smith"
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Zanu-PF.",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.0930583,
                "emotion": {
                    "sadness": 0.132672,
                    "joy": 0.508184,
                    "fear": 0.145776,
                    "disgust": 0.17318,
                    "anger": 0.110927
                },
                "count": 1
            },
            {
                "type": "JobTitle",
                "text": "vice-president",
                "sentiment": {
                    "score": -0.717522,
                    "label": "negative"
                },
                "relevance": 0.088971,
                "emotion": {
                    "sadness": 0.277608,
                    "joy": 0.149906,
                    "fear": 0.058932,
                    "disgust": 0.140269,
                    "anger": 0.407765
                },
                "count": 1
            },
            {
                "type": "Organization",
                "text": "Southern Africa Democratic Development Community",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.081086,
                "emotion": {
                    "sadness": 0.310688,
                    "joy": 0.189676,
                    "fear": 0.037124,
                    "disgust": 0.111012,
                    "anger": 0.079536
                },
                "count": 1
            },
            {
                "type": "Quantity",
                "text": "93-year",
                "sentiment": {
                    "score": 0,
                    "label": "neutral"
                },
                "relevance": 0.081086,
                "count": 1
            }
        ],
        "emotion": {
            "document": {
                "emotion": {
                    "sadness": 0.525943,
                    "joy": 0.517835,
                    "fear": 0.125741,
                    "disgust": 0.176501,
                    "anger": 0.184873
                }
            }
        },
        "concepts": [
            {
                "text": "Robert Mugabe",
                "relevance": 0.970758,
                "dbpedia_resource": "http://dbpedia.org/resource/Robert_Mugabe"
            },
            {
                "text": "Zimbabwe",
                "relevance": 0.931239,
                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe"
            },
            {
                "text": "Rhodesia",
                "relevance": 0.572718,
                "dbpedia_resource": "http://dbpedia.org/resource/Rhodesia"
            },
            {
                "text": "Zimbabwe African National Union – Patriotic Front",
                "relevance": 0.559819,
                "dbpedia_resource": "http://dbpedia.org/resource/Zimbabwe_African_National_Union_–_Patriotic_Front"
            },
            {
                "text": "Morgan Tsvangirai",
                "relevance": 0.548243,
                "dbpedia_resource": "http://dbpedia.org/resource/Morgan_Tsvangirai"
            },
            {
                "text": "Prime Minister of Zimbabwe",
                "relevance": 0.527499,
                "dbpedia_resource": "http://dbpedia.org/resource/Prime_Minister_of_Zimbabwe"
            },
            {
                "text": "Rhodesian Bush War",
                "relevance": 0.498008,
                "dbpedia_resource": "http://dbpedia.org/resource/Rhodesian_Bush_War"
            },
            {
                "text": "Solomon Mujuru",
                "relevance": 0.444079,
                "dbpedia_resource": "http://dbpedia.org/resource/Solomon_Mujuru"
            }
        ],
        "categories": [
            {
                "score": 0.731582,
                "label": "/law, govt and politics/politics/elections"
            },
            {
                "score": 0.37198,
                "label": "/society/unrest and war"
            },
            {
                "score": 0.333466,
                "label": "/law, govt and politics/politics/elections/presidential elections"
            }
        ]
    };
