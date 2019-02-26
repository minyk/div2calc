const armour_datas = {
    mods: {
        mmr_dmg: { name: '지정사수 소총 피해', },
        sg_dmg: { name: '산탄총 피해', },
        pistol_dmg: { name: '권총 피해', },
        lmg_dmg: { name: '경기관총 피해', },
        rifle_dmg: { name: '소총 피해', },
        smg_dmg: { name: 'SMG dmg', },
        ass_dmg: { name: '돌격소총 피해', },
        weapon_dmg: { name: '무기 피해', },
        hs_dmg: { name: '헤드샷 피해', },
        dte: { name: '엘리트 추가 피해', },
        chc: { name: 'Critical Hit Chance', },
        chd: { name: 'Critical Hit dmg', },
        acc: { name: '명중률', },
        sk_pwr: { name: '스킬 파워', },
        sk_haste: { name: '스킬 가속', },
        pulse_pwr: { name: '펄스 스킬 파워', },
        turret_pwr: { name: '터렛 스킬 파워', },
        firefly_pwr: { name: '파이어플라이 스킬 파워', },
        seeker_pwr: { name: '시커마인 스킬 파워', },
        chem_pwr: { name: '켐 런처 스킬 파워', },
        hive_pwr: { name: '하이브 스킬 파워', },
        drone_pwr: { name: '드론 스킬 파워', },
        shield_pwr: { name: '방패 스킬 파워', },
        cooldown_red: { name: '재사용 대기시간 감소', },
        all_res: { name: '모든 저항', },
        hazard_prot: { name: 'Hazard protection', },
        elite_prot: { name: 'Protection from Elites', },
        hok: { name: '처치시 체력', },
        aok: { name: '처치시 방어', },
        health: { name: '체력', },
        total_armor: { name: '총 방어', },
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
