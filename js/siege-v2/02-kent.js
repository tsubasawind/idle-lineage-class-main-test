(function (S) {
    'use strict';
    const pool = ['kent_blue_shark_patrol', 'kent_blue_shark_warrior', 'kent_blue_shark_spearman', 'kent_blue_shark_mage'];
    const map = 'assets/siege-v2/castles/kent/maps/';
    function stage(id, data) { S.register('stages', id, Object.assign({ castleId: 'kent' }, data)); }

    stage('kent_outer_line', { name:'城外戰線', type:'kill_count', target:50, unitPool:pool, mapAsset:map+'kent-gate.jpg', next:'kent_gate_battle' });
    stage('kent_gate_battle', { name:'正門攻堅', type:'destroy_target', targetUnitId:'kent_gate_v2', unitPool:pool, mapAsset:map+'kent-gate.jpg', next:'kent_tower_guard' });
    stage('kent_tower_guard', { name:'守護塔防衛線', type:'kill_count', target:50, unitPool:pool, mapAsset:map+'kent-field.jpg', next:'kent_tower_battle' });
    stage('kent_tower_battle', { name:'守護塔決戰', type:'destroy_target', targetUnitId:'kent_tower_v2', unitPool:pool, mapAsset:map+'kent-field.jpg', next:'kent_lord_battle' });
    stage('kent_lord_battle', { name:'內城城主', type:'boss_kill', targetUnitId:'kent_lord_v2', unitPool:[], mapAsset:map+'kent-field.jpg', next:null });

    S.register('castles', 'kent', {
        name:'肯特城', tier:1, enabled:true, status:'foundation',
        entry:{ minLevel:40, goldCost:1000000, warrantItemId:'new_item_241', warrantCost:1 },
        durationSec:null, firstStageId:'kent_outer_line',
        stageIds:['kent_outer_line','kent_gate_battle','kent_tower_guard','kent_tower_battle','kent_lord_battle'],
        ownership:{ taxPerHour:500, titleId:'title_lord_kent', benefitProfile:'kent' },
        notes:['null 為刻意未定；不可沿用舊攻城數值代填。']
    });
})(window.SiegeV2);
