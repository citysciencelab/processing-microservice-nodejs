export const RE3_OUTPUTS = {
    "Wohnkosten": { "type": "variable" },
    "Anteil erneuerbare Wärmeversorgung": { "type": "variable" },
    "Anteil Fernwärmeversorgung": { "type": "variable" },
    "Anteil fossile Wärmeversorgung": { "type": "variable" },
    "Aktuelle Nettokaltmiete": { "type": "stock" },
    "Aktuelle kalte Betriebskosten": { "type": "stock" },
    "Aktuelle Heizkosten": { "type": "variable" },
    "Anteil Wohnkosten an Verfügbarem Einkommen": { "type": "variable" },
    "CO2-Emissionen aus Heizen pro Kopf": { "type": "variable" },
}


export const RE3_PROCESS_METADATA = {
    'version': '0.1.0',
    'id': 're3-gesamtstadt',
    'title': {
        'en': 'RE3 city-scale System Dynamics Model',
    },
    'description': {
        'en': 'A city scale System Dynamics Model of Hamburg capturing aspects of economic gentrification and energetic modernization.',

    },
    'jobControlOptions': ['sync-execute', 'async-execute'],
    'links': [{
        'type': 'text/html',
        'rel': 'about',
        'title': 'Information Website',
        'href': 'https://re3.cut.hcu-hamburg.de',
        'hreflang': 'en-US'
    }],
    'inputs': {
        'max-rent-increase': {
            'title': 'Maximale Modernisierungsmieterhöhung nach §559 BGB',
            'description': 'Maximale Modernisierungsmieterhöhung nach §559 BGB in Prozent',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 100
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        },
        'investments-facade-private': {
            'title': 'Investitionen Gebäudehülle privat',
            'description': 'Investitionen in die Gebäudehülle durch private Akteure in Millionen Euro pro Jahr',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 500
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        },
        'investments-facade-public': {
            'title': 'Investitionen Gebäudehülle öffentlich',
            'description': 'Investitionen in die Gebäudehülle durch öffentliche Akteure in Millionen Euro pro Jahr',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 100
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        },
        'investments-energysupply-private': {
            'title': 'Investitionen erneuerbare Wärmeversorgung privat',
            'description': 'Investitionen in erneuerbare Wärmeversorgung durch private Akteure in Millionen Euro pro Jahr',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 500
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        },
        'investments-energysupply-public': {
            'title': 'Investitionen erneuerbare Wärmeversorgung öffentlich',
            'description': 'Investitionen in erneuerbare Wärmeversorgung durch öffentliche Akteure in Millionen Euro pro Jahr',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 100
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        },
        'ratio-district-heating': {
            'title': 'Anteil an Fernwärme-investitionen',
            'description': 'Anteil an Fernwärme-investitionen in Prozent',
            'schema': {
                'type': 'number',
                'minimum': 0,
                'maximum': 100
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        },
        'inflation-rate': {
            'title': 'Inflationsrate',
            'description': 'Inflationsrate in Prozent',
            'schema': {
                'type': 'number',
                'minimum': -5,
                'maximum': 10
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        },
        'nominal-wage-change': {
            'title': 'Änderung Nominallohn',
            'description': 'Änderung Nominallohn in Prozent',
            'schema': {
                'type': 'number',
                'minimum': -5,
                'maximum': 15
            },
            'minOccurs': 0,
            'maxOccurs': 1,

        }
    },
    'outputs': {
        'simulation_results': {
            'title': 'Simulation results',
            'description': 'The simulated model with 15 year simulation span',
            'schema': {
                'type': 'object',
                'contentMediaType': 'application/json'
            }
        }
    },
    'example': {
        'inputs': {
            'max-rent-increase': 11,
            'investments-facade-private': 100,
            'investments-facade-public': 20,
            'investments-energysupply-private': 100,
            'investments-energysupply-public': 20,
            'ratio-district-heating': 50,
            'inflation-rate': 2,
            'nominal-wage-change': 3
        }
    }
}