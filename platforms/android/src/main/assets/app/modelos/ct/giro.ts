export class Giro {
    private iGiro :String;
    private cGiro :String;
    private lActivo: boolean;
    private dtCreado: String;
    private dtModificado: String;

    public set setIdGiro(iGiro: String){
        this.iGiro = iGiro;
    }
    public get getIdGiro(): String{
        return this.iGiro;
    }
    public set setGiro(cGiro: String){
        this.cGiro = cGiro;
    }
    public get getGiro(): String{
        return this.cGiro;
    }
    public set setEstGiro(lActivo: boolean){
        this.lActivo = lActivo;
    }
    public get getEstGiro(): boolean{
        return this.lActivo;
    }

    public set setDtcGiro(dtCreado: String){
        this.dtCreado = dtCreado;
    }
    public get getDtcGiro(): String{
        return this.dtCreado;
    }
    public set setDtmGiro(dtModificado: String){
        this.dtModificado = dtModificado;
    }
    public get getDtmGiro(): String{
        return this.dtModificado;
    }

}