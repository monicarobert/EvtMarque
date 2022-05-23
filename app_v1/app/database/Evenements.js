export class Evenement {

    static baseEvts = new Map([
        [ 0, { id:0, nom: 'Grande fête', date: '11/11/1111', lieu: 'Gif'}],
        [ 1, { id:1, nom: 'Braderie', date: '22/11/2222', lieu: 'Lille'}],
        [ 2, { id:2, nom: 'Défilé de mode', date: '12/11/1234', lieu: 'Rennes'}],
        [ 3, { id:3, nom: 'Grosse pagaille', date: '12/11/1789', lieu: 'Metz'}]
    ]);

    static baseUserEvts = [
        { ueId: 0, val: {email: 'hop', evtId: 1} },
        { ueId: 1, val: {email: 'hip', evtId: 0} },
        { ueId: 2, val: {email: 'hip', evtId: 2} },
        { ueId: 3, val: {email: 'hip', evtId: 3} },
        { ueId: 4, val: {email: 'hop', evtId: 3} }
    ];
    static nextUserEvtId = 5;

    static getUserEvtInfo(email) {
        let ue = [];
        ue = this.baseUserEvts.map(e => { return (email === e.val.email ? e : undefined) });
        let ueclean = ue.filter(e => { return e !== undefined });

        let evtsinfo = ueclean.map(e => {
            let einfo = this.baseEvts.get(e.val.evtId);
            if (einfo !== undefined)
                return {evtId: e.val.evtId, evt: einfo}
            return undefined;
        })
        evtsinfoclean = evtsinfo.filter(e => { return e !== undefined });
        return evtsinfoclean;
    }

    static addUserEvt(email, evtId) {
        this.baseEvts.push({evtId: this.nextEvtId, val: {email, evtId}});
        this.nextEvtId++;
    }

    static removeUserEvt(email, evt) {
    }
};
