
import calcularCorchetes from "./corchetes.js";
describe("Sumar", () => {
  it("deberia de devolverme incorrecto si se ingresa solo [", () => {
    expect(calcularCorchetes("[")).toEqual("incorrecto");
  });
});
