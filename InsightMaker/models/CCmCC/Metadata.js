export const CCMCC_OUTPUTS=  {
        "CO2 Reduction Total": {"type": "variable"},
        "Resources Total": {"type": "variable"},
        "Health Total": {"type": "variable"},
        "Political Stability Total": {"type": "variable"},
        "Happiness Total": {"type": "variable"},
}

export const CCMCC_PROCESS_METADATA = {
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
            'description': 'Food is produced locally in Hamburg in containers. Minimum: 0, Maximum: 4',
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
            'description': 'Districts would collect fees from their citizens for the amount of CO2 that they consume through actions like fuel car driving, traveling by plane, eating things from far away. Minimum: 0, Maximum: 4',
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
            'description': 'The city of Hamburg is free of cars. Boolean',
            'schema': {
                'type': 'boolean'
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'amphibic_houses': {
            'title': 'Amphibic Houses',
            'description': 'If the water level rises¸ they can move upwards and float. Minimum: 0, Maximum: 4',
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
            'description': 'Green roofs are rooftops planted with vegetation. Intensive green roofs have thick layers of soil (6 to 12 inches or more) that can support a broad variety of plant or even tree species. Extensive roofs are simpler green roofs with a soil layer of 6 inches or less to support turf¸ grass¸ or other ground cover. Minimum: 0, Maximum: 4',
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
            'description': 'Ensuring that decision-making power over production processes is vested in the hands of workers and communities. This will enable a shift away from profit-driven, environmentally destructive practices towards sustainable and socially just modes of production. Boolean',
            'schema': {
                'type': 'boolean'
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'queer_feminist_ai': {
            'title': 'Queer-feminist AI',
            'description': 'Center the voices and experiences of marginalized communities, including queer individuals, women, people of color, and indigenous communities. Boolean',
            'schema': {
                'type': 'boolean'
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'interspecies_ai': {
            'title': 'Interspecies AI',
            'description': 'A transformative response to climate change requires recognizing and valuing the agency and worth of all species. We must move away from human-centric worldviews and acknowledge the interconnectedness of all beings. Boolean',
            'schema': {
                'type': 'boolean'
            },
            'minOccurs': 1,
            'maxOccurs': 1,
             
        },
        'accountability_for_perpetuating_the_crisis': {
            'title': 'Accountability for perpetuating the crisis',
            'description': 'Punish people, companies and parties who have a big responsibility for the climate crisis. Minimum: 0, Maximum: 2',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 2
            },
            'minOccurs': 0,
            'maxOccurs': 1,
             
        },
        'circular_economy': {
            'title': 'Circular Economy',
            'description': 'Foster a shift towards a circular economy model where resources are used efficiently, waste is minimized, and materials are continuously recycled or repurposed. Encourage local production, repair and sharing initiatives, and reduce reliance on single-use products. Boolean',
            'schema': {
                'type': 'boolean',
            },
            'minOccurs': 0,
            'maxOccurs': 1,
             
        },
        'public_awareness_and_education': {
            'title': 'Public awareness and Education',
            'description': 'Invest in public awareness campaigns and education programs to foster a culture of sustainability. Promote environmental literacy, encourage behavior change towards sustainable practices, and engage citizens in decision-making processes to ensure their active participation in creating sustainable cities. Minimum: 0, Maximum: 2',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 2
            },
            'minOccurs': 0,
            'maxOccurs': 1,
             
        },
        'collaborative_governance': {
            'title': 'Collaborative Governance',
            'description': 'Ensuring that decision-making power over production processes is vested in the hands of workers and communities. This will enable a shift away from profit-driven, environmentally destructive practices towards sustainable and socially just modes of production. Boolean',
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