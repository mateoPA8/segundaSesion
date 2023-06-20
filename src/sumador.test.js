import calcularCorchetes from "./sumador.js";


describe("Sumar", () => {
  it("deberia de devolverme incorrecto si se ingresa solo [", () => {
    expect(calcularCorchetes("[")).toEqual("incorrecto");
  });
  it("deberia de devolverme incorrecto si se ingresa solo ]", () => {
    expect(calcularCorchetes("]")).toEqual("incorrecto");
  });
  it("deberia de devolverme correcto si se ingresan []", () => {
    expect(calcularCorchetes("[]")).toEqual("correcto");
  });
});
