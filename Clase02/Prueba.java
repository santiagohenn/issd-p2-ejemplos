package Clase02;

public class Prueba {

    public static void main(String[] args) {

        Auto[] autos = new Auto[3];
        autos[0] = new Auto("Ford Fiesta", "Rojo");
        autos[1] = new Auto("Chevrolet Onix", "Blanco");
        autos[2] = new Auto("Toyota Corolla", "verde");

        for (int i = 0; i < autos.length; i++) {
            System.out.println(autos[i]);
        }
        
    }

    static class Auto {

        String modelo;
        String color;
        double km;

        public Auto(String modelo, String color) {
            this.modelo = modelo;
            this.color = color;
            this.km = 0.0;
        }

        public void manejar() {
            System.out.println("El auto esta manejando");
        }

        public double getKm() {
            return this.km;
        }

        public String getModelo() {
            return this.modelo;
        }

        public String getColor() {
            return this.color;
        }

        public void imprimirInfo() {
            System.out.println("Modelo: " + this.modelo + ", Color: " + this.color + ", Km: " + this.km);
        }

        @Override
        public String toString() {
            return "Auto [modelo=" + modelo + ", color=" + color + ", km=" + km + "]";
        }

    }

}
