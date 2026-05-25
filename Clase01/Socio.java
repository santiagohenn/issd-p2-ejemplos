public class Socio {

    private String nombre;
    private int antiguedad;

    public Socio(String nombre, int antiguedad) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
    }

    public void imprimir() {
        System.out.println("En el club " + this.nombre + " tiene " 
            + this.antiguedad + " años de antiguedad");
    }

    public void aniversario(int i) {
        this.antiguedad = this.antiguedad + 1;

        int num = 0;
        int num = 3;

    }

    public int getAntiguedad() {
        return this.antiguedad;
    }

    public String getNombre() {
        return this.nombre;
    }

}