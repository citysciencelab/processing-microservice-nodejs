export const URL = '192.168.192.1:8888';


export const PROCESS_METADATA = {
    'version': '0.1.0',
    'id': 'citizen-ai',
    'title': {
        'en': 'CCmCC Citizen AI Simulation Model',
    },
    'description': {
        'en': 'This is the Insight Maker process for the CCmCC project Citizen AI',

    },
    'jobControlOptions': ['sync-execute', 'async-execute'],
    'links': [{
        'type': 'text/html',
        'rel': 'about',
        'title': 'information',
        'href': 'https://example.org/process',
        'hreflang': 'en-US'
    }],
    'inputs': {
        'aquaponics': {
            'title': 'Local Urban Food Production - Aquaponics',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
              
        },
        'emission_fees': {
            'title': 'Emission Fees - Social Urban Emission Trading System SUETS',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'auto_free_city': {
            'title': 'Auto Free City',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'amphibic_houses': {
            'title': 'Amphibic Houses',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'green_roofs': {
            'title': 'Green Roofs',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'collectivization_of_production_goods': {
            'title': 'Collectivization of Production Goods',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'queer_feminist_ai': {
            'title': 'Queer-feminist AI',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'interspecies_ai': {
            'title': 'Interspecies AI',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'accountability_for_perpetuating_the_crisis': {
            'title': 'Accountability for perpetuating the crisis',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 0,
            'maxOccurs': 1,
             
        },
        'circular_economy': {
            'title': 'Circular Economy',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'boolean',
            },
            'minOccurs': 0,
            'maxOccurs': 1,
             
        },
        'public_awareness_and_education': {
            'title': 'Public awareness and Education',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 4
            },
            'minOccurs': 0,
            'maxOccurs': 1,
             
        },
        'collaborative_governance': {
            'title': 'Collaborative Governance',
            'description': 'The name of the person or entity that you wish to be echoed back as an output',
            'schema': {
                'type': 'boolean',
            },
            'minOccurs': 0,
            'maxOccurs': 1,
             
        }
    },
    'outputs': {
        'simulation_results': {
            'title': 'Simulation results',
            'description': 'The simulated model with 50 year simulation span',
            'schema': {
                'type': 'object',
                'contentMediaType': 'application/json'
            }
        }
    },
    'example': {
        'inputs': {
            'aquaponics': 0,
            'emission_fees': 0,
            'auto_free_city': 0,
            'amphibic_houses': 0,
            'green_roofs': 0,
            'collectivization_of_production_goods': 0,
            'queer_feminist_ai': 0,
            'interspecies_ai': 0,
            'accountability_for_perpetuating_the_crisis': 0,
            'circular_economy': 0,
            'public_awareness_and_education': 0,
            'collaborative_governance': 0
        }
    }
}