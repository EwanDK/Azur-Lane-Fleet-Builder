class ship{
    constructor(id,type,rarity,affiliation,classification,name,stats,skills) {
        this.ID=id;
        this.type=type;
        this.rarity=rarity;
        this.affiliation=affiliation;
        this.classification=classification;
        this.name=name;
        this.stats=stats;
        this.d_stats=[...stats];
        this.skills=skills;
        this.coeff=[0,0,0,0,0,0,0,0,0,0,0,0,0]

    }
    static from(json){
        return Object.assign(new ship(), json);
      }
}