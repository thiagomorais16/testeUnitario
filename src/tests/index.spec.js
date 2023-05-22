const { getVideoAula } = require("..");

describe("getVideoAula", () => {
    it("deve retornar uma videoaula com o mesmo nome informado na execucao da funcao", () => {
        const nomeDaAulaQueEuQuero = 'testes unitarios aula 01';
        const urlDaAulaQueEuQuero = 'www.videoaula.com/aula1.mp3';

        const videoAula = getVideoAula(nomeDaAulaQueEuQuero);

        expect(videoAula.nome).toBe(nomeDaAulaQueEuQuero);
        expect(videoAula.url).toBe(urlDaAulaQueEuQuero);
    });

    it("não deve ser capaz de retornar uma videoaula caso o nome passado nao corresponda a nenhum registro", () => {
        const nomeDaAulaQueEuQuero = 'aula que nao existe';

        const videoAula = getVideoAula(nomeDaAulaQueEuQuero);

        expect(videoAula.ok).toBe(false);
        expect(videoAula.erro).toBe("aula nao encontrada para este nome:" + nomeDaAulaQueEuQuero);

    })
});