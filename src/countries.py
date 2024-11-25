class Groups:
    groups = {}
    elts_to_group = {}
    
    def __init__(self, l):
        self.groups = l
        self.update()
        
    def update(self):
        self.elts_to_group = {}
        for identifier, elts in self.groups.items():
            for elt in elts:
                self.elts_to_group[elt] = identifier
    
    def get_group(self, elt):
        if elt not in self.elts_to_group:
            return None
        return self.elts_to_group[elt]
    
    def get_elts(self, group):
        if group not in self.groups:
            return None
        return self.groups[group]
    
    def get_all_elts(self):
        return self.elts_to_group.keys()
    
    def get_groups_name(self):
        return self.groups.keys()
    

country_acronyms = Groups({
    "United States of America": [
        "United States of America",
        "USA",
    ],
    
    "France": [
        "France",
        "FR",
        "en:france",
    ],

    "Italie": [
        "Italie",
        "en:italy", 
    ]
})

subregion_country = Groups({
    
})

region_country = Groups({
    
})


