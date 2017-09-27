import {List, Map} from 'immutable';
import chaiImmutable from 'chai-immutable';
import {expect} from 'chai';
import {selectMenu, toggleAside} from "../../../reducers/cleanFuncs/app";

describe("Состояние основного приложения", () =>{
    it("Боковое меню ASIDE", () => {
        const state = Map({
            asideCollapsed:false,
            aside:Map()
        });

        const nextState = toggleAside(state);
        const lastState = toggleAside(nextState);

        expect(nextState.get('asideCollapsed')).to.equal(true);
        expect(lastState.get('asideCollapsed')).to.equal(false);

    })

    it("Клик по родителю c подпунктами развернуть список", () => {
        const state = Map({
            asideCollapsed:false,
            aside:Map({
                key1: Map({
                    active: false,
                    sub: Map({
                        s1:Map({
                            active:false,
                        }),
                        s2:Map({
                            active:false,
                        })
                    })
                })
            })
        });

        const nextState = selectMenu(state, Map({parent:false, target: 'key1'}));

        expect(nextState.get('aside').get('key1').get('active')).to.equal(true);
        expect(nextState.get('aside').get('key1').get('sub').get('s1').get('active')).to.equal(false);
    });

    it("Клик по сабменю", () => {
        const state = Map({
            asideCollapsed:false,
            aside:Map({
                key1: Map({
                    active: false,
                    sub: Map({
                        s1:Map({
                            active:false,
                        }),
                        s2:Map({
                            active:false,
                        })
                    })
                })
            })
        });

        const nextState = selectMenu(state, Map({parent:'key1', target: 's1'}));

        expect(nextState.get('aside').get('key1').get('active')).to.equal(true);
        expect(nextState.get('aside').get('key1').get('sub').get('s1').get('active')).to.equal(true);
    })

    it("Развернуть два корневых пункта меню", () => {
        const state = Map({
            asideCollapsed:false,
            aside:Map({
                key1: Map({
                    active: false,
                    sub: Map({
                        s1:Map({
                            active:false,
                        }),
                        s2:Map({
                            active:false,
                        })
                    })
                }),
                key2: Map({
                    active: true,
                    sub: Map({
                        s1:Map({
                            active:false,
                        }),
                        s2:Map({
                            active:false,
                        })
                    })
                })
            })
        });

        const nextState = selectMenu(state, Map({parent:false, target: 'key1'}));

        expect(nextState.get('aside').get('key1').get('active')).to.equal(true);
        expect(nextState.get('aside').get('key2').get('active')).to.equal(true);
        expect(nextState.get('aside').get('key1').get('sub').get('s1').get('active')).to.equal(false);
    })
});