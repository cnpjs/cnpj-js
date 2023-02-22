import cnpj from './index.js';

describe('cnpj-js', () => {
  test('fetch cnpj info', async () => {
    const info = await cnpj('34028316000103');

    expect(info).toEqual({
      capital_social: 3403457800.0,
      cnae_fiscal_principal: {
        codigo: 5310501,
        nome: 'Atividades do Correio Nacional',
      },
      cnae_fiscal_secundaria: [
        { codigo: 5212500, nome: 'Carga e descarga' },
        { codigo: 5232000, nome: 'Atividades de agenciamento marítimo' },
      ],
      cnpj: '34028316000103',
      data_inicio_atividade: '1970-02-13',
      data_situacao_cadastral: '2005-11-03',
      data_situacao_especial: null,
      email: 'ACGTESCNPJ@CORREIOS.COM.BR',
      endereco: {
        bairro: 'ASA NORTE',
        cep: '70002900',
        complemento: '',
        logradouro: 'SBN QUADRA 1 BLOCO A',
        municipio: 'BRASILIA',
        numero: 'S/N',
        tipo_logradouro: 'SETOR',
        uf: 'DF',
      },
      ente_federativo_responsavel: null,
      motivo_situacao_cadastral: 'SEM MOTIVO',
      natureza_juridica: 'Empresa Pública',
      nome_da_cidade_no_exterior: null,
      nome_fantasia: 'CORREIOS SEDE',
      pais: null,
      porte: '',
      qualificacao_responsavel: 'Presidente',
      razao_social: 'EMPRESA BRASILEIRA DE CORREIOS E TELEGRAFOS',
      situacao_cadastral: 'Ativa',
      situacao_especial: null,
      socios: [
        {
          data_entrada: '2021-11-25',
          doc: '***425301**',
          faixa_etaria: '41 a 50 anos',
          nome: 'HEGLEHYSCHYNTON VALERIO MARCAL',
          pais: '',
          qualificacao: 'Diretor',
          representante_legal: {
            doc: '***000000**',
            nome: '',
            qualificacao: 'Não informada',
          },
          tipo: 'Pessoa física',
        },
      ],
      telefone1: '6132144316',
      telefone2: '00',
      telefone_fax: '00',
    });
  });

  test('cnpj not found', async () => {
    await expect(cnpj('not-found-000')).rejects.toThrow(new Error('api.cnpjs.dev error; status=404'));
  });
});
