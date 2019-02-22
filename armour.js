const armour_datas = {
    mods: {
        mmr_dmg: { name: 'MMR dmg', },
        sg_dmg: { name: 'Shotgun dmg', },
        pistol_dmg: { name: 'Pistol dmg', },
        lmg_dmg: { name: 'LMG dmg', },
        rifle_dmg: { name: 'Rifle dmg', },
        smg_dmg: { name: 'SMG dmg', },
        ass_dmg: { name: 'Assault dmg', },
        weapon_dmg: { name: 'Weapon dmg', },
        hs_dmg: { name: 'Headshot dmg', },
        dte: { name: 'Damage to Elites', },
        chc: { name: 'Critical Hit Chance', },
        chd: { name: 'Critical Hit dmg', },
        acc: { name: 'Accuracy', },
        sk_pwr: { name: 'Skill power', },
        sk_haste: { name: 'Skill Haste', },
        pulse_pwr: { name: 'Pulse skill power', },
        turret_pwr: { name: 'Turret skill power', },
        firefly_pwr: { name: 'Firefly skill power', },
        seeker_pwr: { name: 'Seeker skill power', },
        chem_pwr: { name: 'Chem Launcher skill power', },
        hive_pwr: { name: 'Hive skill power', },
        drone_pwr: { name: 'Drone skill power', },
        shield_pwr: { name: 'Shield skill power', },
        cooldown_red: { name: 'Cooldown reduction', },
        all_res: { name: 'All resistance', },
        hazard_prot: { name: 'Hazard protection', },
        elite_prot: { name: 'Protection from Elites', },
        hok: { name: 'Health on kill', },
        aok: { name: 'Armour on kill', },
        health: { name: 'Health', },
        total_armor: { name: 'Total Armor', },
    },
    sets: {
        airaldi: {
            mmr_dmg: "0.1",
            hs_dmg: "0.1",
            acc: "0.1",
            order: [ 'acc', 'hs_dmg', 'mmr_dmg' ],
            longname: 'Airaldi Holdings',
        },
        china: {
            sg_dmg: "0.08",
            sk_haste: "0.1",
            all_res: "0.1",
            order: [ 'sg_dmg', 'all_res', 'sk_haste' ],
            longname: 'China Light',
        },
        murakami: {
            firefly_pwr: "0.15",
            hazard_prot: "0.1",
            health: "0.08",
            order: [ 'health', 'hazard_prot', 'firefly_pwr' ],
            longname: 'Murakami',
        },

        richter: {
            pistol_dmg: "0.2",
            shield_pwr: "0.15",
            hazard_prot: "0.1",
            order: [ 'hazard_prot', 'pistol_dmg', 'shield_pwr' ],
            longname: 'Richter & Kaiser',
        },
        petrov: {
            lmg_dmg: "0.08",
            turret_pwr: "0.15",
            cooldown_red: "0.1",
            order: [ 'lmg_dmg', 'turret_pwr', 'cooldown_red' ],
            longname: 'Petrov Defence',
        },

        overlord: {
            rifle_dmg: "0.1",
            dte: "0.07",
            total_armor: "0.075",
            order: [ 'rifle_dmg', 'total_armor', 'dte' ],
            longname: 'Overlord',
        },

        fenris: {
            ass_dmg: "0.1",
            elite_prot: "0.1",
            hok: "0.2",
            order: [ 'ass_dmg', 'elite_prot', 'hok' ],
            longname: 'Fenris Group',
        },

        sokolov: {
            smg_dmg: "0.1",
            chd: "0.08",
            seeker_pwr: "0.15",
            order: [ 'smg_dmg', 'chd', 'seeker_pwr' ],
            longname: 'Sokolov Concern',
        },

        douglas: {
            chc: "0.07",
            chd: "0.1",
            acc: "0.05",
            order: [ 'acc', 'chd', 'chc' ],
            longname: 'Douglas & Harding',
        },

        alps: {
            sk_pwr: "0.05",
            hive_pwr: "0.15",
            cooldown_red: "0.1",
            order: [ 'cooldown_red', 'sk_pwr', 'hive_pwr' ],
            longname: 'Alps Summit',
        },

        providence: {
            weapon_dmg: "0.05",
            sk_pwr: "0.1",
            health: "0.08",
            order: [ 'sk_pwr', 'health', 'weapon_dmg' ],
            longname: 'Providence defence',
        },

        wyvern: {
            chc: "0.07",
            chd: "0.07",
            drone_pwr: "0.15",
            order: [ 'chd', 'drone_pwr', 'chc' ],
            longname: 'Wyvern Wear',
        },

        badger: {
            dte: "0.07",
            chem_pwr: "0.15",
            aok: "0.15",
            order: [ 'dte', 'aok', 'chem_pwr' ],
            longname: 'Badger Tuff',
        },

        gila: {
            pulse_pwr: "0.15",
            hazard_prot: "0.2",
            total_armor: "0.05",
            order: [ 'total_armor', 'hazard_prot', 'pulse_pwr' ],
            longname: 'Gila guard',
        },
    }
};

let armour_data;
export default armour_data = armour_datas;
