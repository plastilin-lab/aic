{"version":3,"sources":["block-header-entry.js"],"names":["BX","namespace","style","Landing","Utils","addClass","removeClass","onTransitionEnd","BlockHeaderEntry","node","this","headerNode","wrapperNode","parentNode","fixMomentNodes","querySelectorAll","FIX_MOMENT_SELECTOR","hiddenSectionsNodes","SECTION_HIDDEN_SELECTOR","mode","getMode","prevState","topPanel","document","querySelector","headerOffset","offsetHeight","HEADER_SELECTOR","STATE_IN_FLOW","STATE_ON_TOP","STATE_FIX_MOMENT","DIRECTION_TOP_TO_BOTTOM","DIRECTION_BOTTOM_TO_TOP","THRESHOLD_FULL","STICKY_CLASS","FLOAT_CLASS","MODE_STICKY","MODE_STICKY_RELATIVE","MODE_STATIC","IN_FLOW_CLASSES","ON_TOP_CLASSES","FIX_MOMENT_CLASSES","FIX_MOMENT_ADD_DATA","FIX_MOMENT_REMOVE_DATA","getHeaderNodeByWrapper","wrapper","prototype","getNodeForObserve","hasClass","getCurrentState","observerEntry","isIntersecting","isOnTop","intersectionRatio","boundingClientRect","top","getDirection","currentState","isOverScreen","height","rootBounds","setInFlow","onCustomEvent","data","setOnTop","headerHeight","opacity","overflow","then","hideSections","bind","Promise","all","setFixMoment","resolve","transitionPromises","push","forEach","classesToAdd","undefined","split","classesToRemove","unsetOnTop","unsetFixMoment","showSections","setProperty","removeProperty","onIntersection","entries","entry","blockHeaders","BlockHeaders","getInstance","currHeaderEntry","getEntryByIntersectionTarget","target","state","direction","scrollIntoView","behavior"],"mappings":"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","file":"block-header-entry.map.js"}