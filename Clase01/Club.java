public class Club {

    Socio[] socios;

    public Club() {
        this.socios = new Socio[5];
        this.socios[0] = new Socio("Juan", 5);
        this.socios[1] = new Socio("Ana", 13);
        this.socios[2] = new Socio("Pedro", 2);
        this.socios[3] = new Socio("Maria", 8);
        this.socios[4] = new Socio("Santiago", 1);
    }

    public void imprimirSocioMasAntiguo() {
        Socio socioMasAntiguo = this.socios[0];
        for (int i = 1; i < socios.length; i++) {
            if (socios[i].getAntiguedad() > socioMasAntiguo.getAntiguedad()) {
                socioMasAntiguo = socios[i];
            }
        }
        System.out.println("El socio mas antiguo es:" + socioMasAntiguo.getNombre());
    }

}
