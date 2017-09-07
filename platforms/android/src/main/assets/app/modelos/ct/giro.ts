export class Giro {
    private iGiro :string;
    private cGiro :string;
    private lActivo: boolean;
    private dtCreado: string;
    private dtModificado: string;

    public set setIdGiro(iGiro: string){
        this.iGiro = iGiro;
    }
    public get getIdGiro(): string{
        return this.iGiro;
    }
    public set setGiro(cGiro: string){
        this.cGiro = cGiro;
    }
    public get getGiro(): string{
        return this.cGiro;
    }
    public set setEstGiro(lActivo: boolean){
        this.lActivo = lActivo;
    }
    public get getEstGiro(): boolean{
        return this.lActivo;
    }
    public set setDtcGiro(dtCreado: string){
        this.dtCreado = dtCreado;
    }
    public get getDtcGiro(): string{
        return this.dtCreado;
    }
    public set setDtmGiro(dtModificado: string){
        this.dtModificado = dtModificado;
    }
    public get getDtmGiro(): string{
        return this.dtModificado;
    }

    public toString (){
        return "ID: '"+ this.iGiro +"'  Giro: " 
            + this.cGiro + " Activo: " + this.lActivo + " Fecha de Creacion: " + this.dtCreado 
                + " Fecha de Modificacion: " + this.dtModificado;
    }

}