// Base de dados completa de produtos da Oliveira Pratas 925
const products = [
    // ALIANÇAS
    { id: 1, name: "Aliança 4mm de Compromisso e Namoro em Prata 950 Legítima", category: "aliancas", price: 350, image: "Aliança 4mm De Compromisso E Namoro Em Prata 950 Legítima.png", isAlliance: true },
    { id: 2, name: "Aliança de Namoro Compromisso Prata 950 Diamantada 3mm", category: "aliancas", price: 270, image: "Aliança De Namoro Compromisso Prata 950 Diamantada 3mm.png", isAlliance: true },
    { id: 3, name: "Aliança de Namoro Zircônia Rosa em Prata 950 + Solitário", category: "aliancas", price: 285, image: "Aliança De Namoro Zircônia Rosa Em Prata 950 + Solitário.png", isAlliance: true },
    { id: 4, name: "Aliança Prata 950 Namoro + Anel Solitário", category: "aliancas", price: 349, image: "Aliança Prata 950 Namoro + Anel Solitário.png", isAlliance: true },
    { id: 5, name: "Alianças Coração Fio de Ouro + Solitário", category: "aliancas", price: 450, image: "Alianças Coração Fio De Ouro - Prata 950 Com Anel Solitário.png", isAlliance: true },
    { id: 6, name: "Alianças de Namoro com Pedra Roxa + Solitário", category: "aliancas", price: 299, image: "Alianças De Namoro Com Pedra Roxa Prata 950 + Solitário.png", isAlliance: true },
    { id: 7, name: "Alianças de Namoro com Pedras de Zircônia Prata 950 – 5mm", category: "aliancas", price: 595, image: "Alianças De Namoro Com Pedras De Zircônia Prata 950- 5mm.png", isAlliance: true },
    { id: 8, name: "Alianças de Namoro Prata 950 Fina com Pedra Zircônia", category: "aliancas", price: 300, image: "Alianças De Namoro Prata 950 Fina Com Pedra Zircônia.png", isAlliance: true },
    { id: 9, name: "Alianças de Namoro Prata Legítima 2mm + Caixinha", category: "aliancas", price: 250, image: "Alianças De Namoro Prata Legítima 2mm + Caixinha.png", isAlliance: true },
    { id: 10, name: "Alianças Namoro Compromisso Prata 950 Chanfradas Polidas", category: "aliancas", price: 195, image: "Alianças Namoro Compromisso Em Prata 950 Chanfradas Polidas.png", isAlliance: true },
    { id: 11, name: "Alianças Pedra Roxa/Lilás + Solitário", category: "aliancas", price: 350, image: "Alianças Pedra Roxa lilás Prata 950 Legítima + Solitário.png", isAlliance: true },
    { id: 12, name: "Par Aliança Prata 7mm Chanfrada + Solitário", category: "aliancas", price: 300, image: "Par Aliança Prata 7mm Chanfrada E Solitário Namoro.png", isAlliance: true },
    { id: 13, name: "Par Aliança Prata 950 4mm + Solitário", category: "aliancas", price: 300, image: "Par Aliança Prata 950 Legitima 4mm Compromisso Com Solitário.png", isAlliance: true },
    { id: 14, name: "Par de Aliança de Namoro com Pedra", category: "aliancas", price: 349, image: "Par De Aliança De Namoro Com Pedra Alianças De Prata 950.png", isAlliance: true },
    { id: 15, name: "Par de Aliança de Namoro com Pedra Zircônia Roxa", category: "aliancas", price: 399, image: "Par De Aliança De Namoro Com Pedra De Zircônia Roxa Prata 950.png", isAlliance: true },
    { id: 16, name: "Par de Alianças 1/2 Cana com Diamantado", category: "aliancas", price: 194, image: "Par De Alianças 1 2 Cana Com Diamantado Prata 950 Legítima.png", isAlliance: true },
    { id: 17, name: "Par de Alianças com Pedra Zircônia Roxa + Solitário", category: "aliancas", price: 399, image: "Par de Alianças Com Pedra Zircônia Roxa + Anel Solitário.png", isAlliance: true },
    { id: 18, name: "Par de Alianças de Namoro com Anel Solitário", category: "aliancas", price: 249, image: "Par De Alianças De Namoro Com Anel Solitário.png", isAlliance: true },
    { id: 19, name: "Par de Alianças de Namoro Cravejada + Solitário", category: "aliancas", price: 399, image: "Par De Alianças De Namoro Cravejada Prata 950 Com Solitário.png", isAlliance: true },
    { id: 20, name: "Par de Alianças de Namoro Prata 950 Arredondada Polida", category: "aliancas", price: 199, image: "Par De Alianças De Namoro Prata 950 Arredondada Polida.png", isAlliance: true },
    { id: 21, name: "Par de Alianças Meia Cana com Diamantado Prata 950 Legítima", category: "aliancas", price: 194, image: "Par De Alianças Meia Cana Com Diamantado Prata 950 Legítima.png", isAlliance: true },

    // ANÉIS
    { id: 22, name: "Anel Coroa azul bb", category: "aneis", price: 60, image: "Anel Coroa azul bb.jpg", isSolitaire: false },
    { id: 23, name: "Anel de Prata 925 coração torcido", category: "aneis", price: 50, image: "Anel de Prata 925 coração Torçido.jpg", isSolitaire: false },
    { id: 24, name: "Anel de Prata 925 Solitário", category: "aneis", price: 50, image: "Anel de Prata 925 Solitário.jpg", isSolitaire: true, isBestSeller: true },
    { id: 25, name: "Anel Love Cravejado", category: "aneis", price: 65, image: "Anel Love Cravejado.jpg", isSolitaire: false },
    { id: 26, name: "Anel solitário cravejado prata 925", category: "aneis", price: 80, image: "Anel solitario cravejado prata 925.webp", isSolitaire: true, isBestSeller: true },
    { id: 27, name: "Anel Trevo de Corações", category: "aneis", price: 60, image: "Anel Trevo de Corações.jpg", isSolitaire: false },
    { id: 28, name: "Anel Amor 5,5mm", category: "aneis", price: 60, image: "Anel Amor 5,5mm Prata 925.jpg", isSolitaire: false },
    { id: 29, name: "Anel Concha", category: "aneis", price: 50, image: "Anel Concha.jpg", isSolitaire: false },
    { id: 30, name: "Anel Corações", category: "aneis", price: 80, image: "Anel Corações.jpg", isSolitaire: false },
    { id: 31, name: "Anel Corações Cravejado", category: "aneis", price: 65, image: "anel corações cravejado prata 925 (1).webp", isSolitaire: false },
    { id: 32, name: "Anel trevo cravejado prata 925", category: "aneis", price: 65, image: "Anel trevo cravejado prata 925.webp", isSolitaire: false },
    { id: 33, name: "Anel Quadrado", category: "aneis", price: 70, image: "Anel Quadrado.jpg", isSolitaire: false },
    { id: 34, name: "Anel Solitário Cravejado Prata 925", category: "aneis", price: 70, image: "ANEL SOLITARIO CRAVEJADO.webp", isSolitaire: true, isBestSeller: true },

    // DEDEIRAS
    { id: 35, name: "Anel de prata 925 Flamengo", category: "dedeiras", price: 270, image: "Anel de prata 925 Flamengo.png" },
    { id: 36, name: "Anel Folha", category: "dedeiras", price: 200, image: "Anel Folha.png" },

    // BRINCOS
    { id: 37, name: "Brinco Redondo 12mm", category: "brincos", price: 80, image: "Brinco Redondo 12mm de Prata 925.png" },
    { id: 38, name: "Brinco Redondo Argola Torcida", category: "brincos", price: 30, image: "Brinco Redondo Argola Torcida Prata 925.png", isBestSeller: true },
    { id: 39, name: "Par Brinco Coração 8mm", category: "brincos", price: 50, image: "Par Brinco Coração 8mm.jpeg", isBestSeller: true },
    { id: 40, name: "Par Brinco Coração", category: "brincos", price: 30, image: "Par Brinco Coração.png" },
    { id: 41, name: "Par de Brincos Argola Click + Cruz", category: "brincos", price: 80, image: "Par de Brincos Argola Click com Pingente Cruz Cravejada.png", isBestSeller: true },
    { id: 42, name: "Trio de brincos bolinhas", category: "brincos", price: 40, image: "Trio de brincos bolinhas.jpg" },
    { id: 43, name: "Trio de Brincos Redondo Royal", category: "brincos", price: 40, image: "Trio de Brincos Redondo Royal.png" },
    { id: 44, name: "Brinco Baby Cruz", category: "brincos", price: 40, image: "Brinco Baby Cruz.jpg" },
    { id: 45, name: "Par Brinco Coração 4mm", category: "brincos", price: 30, image: "Par Brinco Coração 4mm.png" },
    { id: 46, name: "Par Brincos Coração Argola Torcida", category: "brincos", price: 30, image: "Par Brincos Coração Argola Torcida.jpg" },
    { id: 47, name: "Par Brincos Cravejado Batimentos", category: "brincos", price: 50, image: "Par Brincos Cravejado Batimentos.jpg" },
    { id: 48, name: "Par de Brincos Argola Infinito", category: "brincos", price: 40, image: "Par de Brincos Argola Infinito.jpg" },
    { id: 49, name: "Trio Quadrado 3, 4 e 5mm", category: "brincos", price: 50, image: "Trio Quadrado 3, 4 e 5mm.jpg" },
    { id: 50, name: "Trio Redondo Pedra Verde 3, 4 e 5mm", category: "brincos", price: 40, image: "Trio Redondo Pedra Verde 3, 4 e 5mm.jpg" },

    // COLARES FEMININO
    { id: 51, name: "Choker de Prata 925 Corações Rosa", category: "colares", price: 130, image: "Choker de Prata 925 Corações Rosa.jpg" },
    { id: 52, name: "Choker de Prata 925 Corações Verde", category: "colares", price: 130, image: "Choker de Prata 925 Corações Verde.jpg" },
    { id: 53, name: "Choker de Prata 925 Love", category: "colares", price: 130, image: "Choker de Prata 925 Love.jpg" },
    { id: 54, name: "Colar Barbie", category: "colares", price: 99, image: "Colar Barbie em Prata 925 Legítima.jpg" },
    { id: 55, name: "Colar Borboleta com Zircônias Coloridas", category: "colares", price: 99, image: "Colar Borboleta Prata 925 Legítima Com Zircônias Coloridas.jpg" },
    { id: 56, name: "Colar Cravejado importado (2)", category: "colares", price: 700, image: "Colar Cravejado importado (2).jpg", isBestSeller: true },
    { id: 57, name: "Colar Singapura + Coração Cravejado", category: "colares", price: 190, image: "Colar de Prata 925 Feminino - Corrente Singapura com Pingente Coração Cravejado.jpg" },
    { id: 58, name: "Colar Bailarina Cravejada", category: "colares", price: 99, image: "Colar De Prata 925 Legítima Bailarina Cravejada Zircônia.jpg" },
    { id: 59, name: "Colar Modelo Pipoca", category: "colares", price: 100, image: "Colar de Prata 925 Modelo Pipoca.jpg" },
    { id: 60, name: "Colar Mandala Abençoada por Deus", category: "colares", price: 99, image: "Colar em Prata 925 Legítima - Pingente Mandala Abençoada por Deus.jpg" },
    { id: 61, name: "Colar Menino", category: "colares", price: 99, image: "Colar Menino em Prata 925 Legítima.jpg" },
    { id: 62, name: "Colar Dois Corações Entrelaçados", category: "colares", price: 99, image: "Colar Prata 925 com Pingente de Dois Corações Entrelaçados.jpg" },
    { id: 63, name: "Colar Patinha", category: "colares", price: 99, image: "Colar Prata 925 Legítima Pingente Patinha Pet Zircônias Pretas.jpg" },
    { id: 64, name: "Conjunto Coração Verde Esmeralda", category: "colares", price: 100, image: "CONJUNTO CORAÇÃO VERDE ESMERALDA EM PRATA 925.jpeg", isBestSeller: true },
    { id: 65, name: "Conjunto Coração Vermelho", category: "colares", price: 100, image: "Conjunto Coração vermelho em Prata 925.jpg", isBestSeller: true },
    { id: 66, name: "Conjunto Ponto de Luz Verde Esmeralda", category: "colares", price: 99, image: "Conjunto Ponto de Luz Prata 925 Verde Esmeralda (Colar + Brincos).jpg", isBestSeller: true },
    { id: 67, name: "Conjunto Coração Prata 925 Legítima - Colar Veneziana + Brincos Azul Turquesa", category: "colares", price: 99, image: "Conjunto Coração Prata 925 Legítima - Colar Veneziana + Brincos Azul Turquesa.jpg", isBestSeller: true },
    { id: 68, name: "Gargantilha 6 Fios", category: "colares", price: 550, image: "Gargantilha 6 Fios em Prata 925.jpg" },
    { id: 69, name: "Gargantilha Aspiral 45cm 2,5mm", category: "colares", price: 140, image: "Gargantilha Aspiral 45cm 2,5mm.jpg" },
    { id: 70, name: "Gargantilha Coração Rosa", category: "colares", price: 120, image: "Gargantilha Coração Rosa.jpg" },
    { id: 71, name: "Gargantilha Pingente Menina", category: "colares", price: 99, image: "Gargantilha Pingente Menina Prata 925 Italiana.jpg" },
    { id: 72, name: "Terço de Prata 925", category: "colares", price: 160, image: "Terço de Prata 925 corrente fina bolinha 2.5mm.jpg" },
    { id: 73, name: "Colar Coração Roxo", category: "colares", price: 120, image: "Colar Coração Roxo.jpg" },

    // CORRENTES MASCULINAS
    { id: 74, name: "Colar Baiano 2mm 70cm", category: "correntes", price: 249, image: "Colar baiano 2mm 70cm Prata 925.png" },
    { id: 75, name: "Corrente Bismack 3mm – 70cm", category: "correntes", price: 249, image: "Corrente Bismack 3mm - 70cm Prata 925.png" },
    { id: 76, name: "Corrente Grumet 7mm – 80cm", category: "correntes", price: 999, image: "Corrente Grumet 7mm - 80cm Prata 925.png" },
    { id: 77, name: "Corrente Grumet 10mm 70cm", category: "correntes", price: 1400, image: "Corrente Grumet 10mm 70cm.jpeg" },
    { id: 78, name: "Corrente Grumet 7,3mm 70cm com Fecho Gaveta", category: "correntes", price: 849, image: "Corrente Grumet em Prata 925 - Fecho Gaveta.jpeg" },
    { id: 79, name: "Corrente Gucci 3,5mm – 70cm", category: "correntes", price: 299, image: "Corrente Gucci 3,5mm - 70cm Prata 925.png" },
    { id: 80, name: "Corrente Piastrine 3,5mm – 70cm", category: "correntes", price: 399, image: "Corrente Piastrine 3,5mm - 70cm Prata 925.png" },
    { id: 81, name: "Corrente Grumet 1,5mm 70cm", category: "correntes", price: 100, image: "Corrente Grumet 1,5mm 70cm.jpg" },
    { id: 82, name: "Corrente Grumet 3mm 70cm", category: "correntes", price: 300, image: "Corrente Grumet 3mm 70cm.jpg" },
    { id: 83, name: "Corrente Terço Grande", category: "correntes", price: 250, image: "Corrente Terço Grande.jpg" },

    // PINGENTES
    { id: 84, name: "Pingente Abençoada", category: "pingentes", price: 50, image: "Pingente Abençoada.jpg" },
    { id: 85, name: "Pingente Bailarina", category: "pingentes", price: 50, image: "Pingente Bailarina.jpg" },
    { id: 86, name: "Pingente Barbie", category: "pingentes", price: 50, image: "Pingente Barbie em Prata 925 com Detalhe em Resina (2).jpg" },
    { id: 87, name: "Pingente Borboleta Cravejado", category: "pingentes", price: 50, image: "Pingente Borboleta Cravejado.jpg" },
    { id: 88, name: "Pingente Coração Duplo", category: "pingentes", price: 50, image: "Pingente Coraçao duplo.jpg" },
    { id: 89, name: "Pingente Coroa", category: "pingentes", price: 60, image: "Pingente Coroa em Prata 925 (2).jpg" },
    { id: 90, name: "Pingente Cruz Palito", category: "pingentes", price: 50, image: "Pingente Cruz Palito.jpg", isBestSeller: true },
    { id: 91, name: "Pingente Cavalo", category: "pingentes", price: 50, image: "Pingente de Prata 925 Cavalo.jpeg" },
    { id: 92, name: "Pingente Yin & Yang", category: "pingentes", price: 85, image: "Pingente de Prata 925 Ing & Yang.jpg" },
    { id: 93, name: "Pingente Jacaré embaixo do Coqueiro", category: "pingentes", price: 85, image: "Pingente de Prata 925 Jacaré em Baixo do Coqueiro.jpg" },
    { id: 94, name: "Pingente Jacaré Lacoste", category: "pingentes", price: 60, image: "Pingente de prata 925 Jacare lacoste.jpg" },
    { id: 95, name: "Pingente Oakley", category: "pingentes", price: 50, image: "Pingente de Prata 925 Oakley.jpeg" },
    { id: 96, name: "Pingente Fé", category: "pingentes", price: 100, image: "Pingente Fé Prata 925.jpg" },
    { id: 97, name: "Pingente Flamengo", category: "pingentes", price: 90, image: "Pingente Flamengo.jpg" },
    { id: 98, name: "Pingente Flor", category: "pingentes", price: 76.50, image: "Pingente Flor.jpg" },
    { id: 99, name: "Pingente Leão da Tribo de Judá", category: "pingentes", price: 60, image: "Pingente Leão da Tribo de Judá.jpg" },
    { id: 100, name: "Pingente Menino Cravejado", category: "pingentes", price: 50, image: "Pingente Menino em Prata 925 com Pedras Cravejadas (2).jpg" },
    { id: 101, name: "Pingente Patinha", category: "pingentes", price: 50, image: "Pingente Patinha.jpg" },
    { id: 102, name: "Pingente Tio Patinhas", category: "pingentes", price: 135, image: "Pingente Tio Patinhas.jpg" },
    { id: 103, name: "Pingente Cifrão Cravejado", category: "pingentes", price: 100, image: "Pingente Cifrão Cravejado.jpg" },
    { id: 104, name: "Pingente Cifrão", category: "pingentes", price: 70, image: "Pingente Cifrão.jpg" },
    { id: 105, name: "Pingente Cruz 3D", category: "pingentes", price: 50, image: "Pingente Cruz 3D.jpg" },
    { id: 106, name: "Pingente Cruz Celta", category: "pingentes", price: 50, image: "Pingente Cruz Celta.jpg" },
    { id: 107, name: "Pingente Fé Pequeno", category: "pingentes", price: 60, image: "Pingente Fe Pequeno.jpg" },
    { id: 108, name: "Pingente Fuzil", category: "pingentes", price: 60, image: "Pingente Fuzil.jpg" },
    { id: 109, name: "Pingente Globo Lost", category: "pingentes", price: 35, image: "Pingente Globo Lost.jpg" },
    { id: 110, name: "Pingente São Jorge", category: "pingentes", price: 50, image: "Pingente São Jorge.jpg" },

    // PULSEIRAS MASCULINAS
    { id: 111, name: "Pulseira Grumet elo duplo 3,5mm", category: "pulseiras-masc", price: 149, image: "Pulseira Grumet elo duplo 3,5mm Prata 925.jpg", isBestSeller: true },
    { id: 112, name: "Pulseira 8,2mm", category: "pulseiras-masc", price: 299, image: "pulseira8,2mm.jpg" },
    { id: 113, name: "Pulseira Esteira 2,4mm", category: "pulseiras-masc", price: 99, image: "pulseira esteira 2,4mm.jpg", isBestSeller: true },
    { id: 114, name: "Pulseira Grumet Elo Duplo 2mm", category: "pulseiras-masc", price: 80, image: "Pulseira Grumet elo duplo 2mm.jpg", isBestSeller: true },
    { id: 115, name: "Pulseira Tripla", category: "pulseiras-masc", price: 90, image: "Pulseira Tripla.jpg" },

    // PULSEIRAS FEMININAS
    { id: 116, name: "Pulseira Bolinhas 4mm 18cm", category: "pulseiras-fem", price: 100, image: "Pulseira Bolinhas 4mm 18cm 6.2g.jpg", isBestSeller: true },
    { id: 117, name: "Pulseira Coração Vermelho", category: "pulseiras-fem", price: 70, image: "pulseira coração vermelho.jpg", isBestSeller: true },
    { id: 118, name: "Pulseira de Prata 925 com Pingentes Delicados", category: "pulseiras-fem", price: 150, image: "Pulseira de Prata 925 com Pingentes Delicados.jpeg" },
    { id: 119, name: "Pulseira Dupla com Pingentes Delicados", category: "pulseiras-fem", price: 150, image: "Pulseira Dupla em Prata 925 Com Pingentes Delicados.jpeg" },
    { id: 120, name: "Pulseira Prata 925 com Pedras Verdes", category: "pulseiras-fem", price: 70, image: "Pulseira Prata 925 com Pedras Verdes.jpg", isBestSeller: true },
    { id: 121, name: "Pulseira Feminina Bolinhas", category: "pulseiras-fem", price: 129, image: "pulseira feminina bolinhas.jpg" },
    { id: 122, name: "Pulseira Prata 925 com Pedras Zircônia Branca", category: "pulseiras-fem", price: 70, image: "Pulseira Prata 925 com Pedras Zircônia Branca .jpg" },
    { id: 123, name: "Pulseira Trançada 8 Fios", category: "pulseiras-fem", price: 297, image: "pulseira trançada 8 fios.jpg", isBestSeller: true },

    // BRACELETES
    { id: 124, name: "Bracelete Arredondado com Trava", category: "braceletes", price: 100, image: "Bracelete Arredondado com trava prata 925.png" },
    { id: 125, name: "Bracelete Fio Torcido / Fecho de Prata 925 Pequeno", category: "braceletes", price: 80, image: "Bracelete fio Torçido prata 925.png" },
    { id: 126, name: "Bracelete Regulável Coração Infinito", category: "braceletes", price: 70, image: "Bracelete Regulavel Coração infinito.jpg" },

    // TORNOZELEIRAS
    { id: 127, name: "Tornozeleira Calda", category: "tornozeleiras", price: 75, image: "Tornozeleira Calda Prata 925.jpg" },
    { id: 128, name: "Tornozeleira Coração Origami", category: "tornozeleiras", price: 75, image: "Tornozeleira Coração Origami Prata 925.jpg" },
    { id: 129, name: "Tornozeleira Gota Verde", category: "tornozeleiras", price: 75, image: "Tornozeleira de Prata 925 gota Verde.jpg" },

    // CUIDADOS
    { id: 130, name: "Limpa Pratas", category: "cuidados", price: 25, image: "Limpa Pratas.jpg", isBestSeller: true },
    { id: 131, name: "Fecho de Prata 925 Pequeno", category: "cuidados", price: 30, image: "Fecho de prata 925 pequeno.webp", isBestSeller: true },

    // PIERCINGS
    { id: 132, name: "Piercing Pedrinha de Nariz", category: "piercings", price: 30, image: "Piercing Pedrinha nariz na Prata 925.webp", isBestSeller: true },
    { id: 133, name: "Par Piercing Mamilo", category: "piercings", price: 90, image: "Par Piercing Mamilo.png" },
    { id: 134, name: "Piercing Argola com Flor", category: "piercings", price: 30, image: "Piercing Argola com Flor.png" },
    { id: 135, name: "Piercing Argola Lisa", category: "piercings", price: 30, image: "Piercing Argola Lisa.png" },
    { id: 136, name: "Piercing Nariz Argola Coração", category: "piercings", price: 30, image: "Piercing Nariz Argola Coração.png" }
];

// Estado da Aplicação
let cart = JSON.parse(localStorage.getItem('oliveira_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('oliveira_favorites')) || [];
let userBenefit = JSON.parse(localStorage.getItem('oliveira_benefit')) || null; // { percentage: X, claimed: false }

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initUI();
    renderCatalog(products);
    renderBestSellers();
    updateCounters();
    setupEventListeners();
});

// UI & Navegação Mobile
function initUI() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em links
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
}

// Renderizar Produtos
function renderCatalog(items, containerId = 'catalogGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">Nenhum produto encontrado.</p>';
        return;
    }

    items.forEach(product => {
        const isFav = favorites.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${product.id})" title="Favoritar">❤️</button>
            </div>
            <div class="product-info">
                <div>
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                </div>
                <div>
                    <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                    <button class="btn btn-primary btn-small" style="width: 100%;" onclick="addToCart(${product.id})">ADICIONAR AO CARRINHO</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderBestSellers() {
    const bestSellers = products.filter(p => p.isBestSeller || p.category === 'aneis' && p.isSolitaire);
    renderCatalog(bestSellers, 'gridMaisVendidos');
}

// Filtros e Pesquisa
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        gtag('event', 'search', { search_term: term });
        const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
        renderCatalog(filtered);
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.getAttribute('data-category');
            if (cat === 'todos') {
                renderCatalog(products);
            } else {
                const filtered = products.filter(p => p.category === cat);
                renderCatalog(filtered);
            }
        });
    });

    // Modais Carrinho / Favoritos
    document.getElementById('btnCarrinhoModal').addEventListener('click', openCartModal);
    document.getElementById('closeCart').addEventListener('click', () => document.getElementById('cartModal').classList.remove('active'));

    document.getElementById('btnFavoritosModal').addEventListener('click', openFavModal);
    document.getElementById('closeFav').addEventListener('click', () => document.getElementById('favModal').classList.remove('active'));

    // Pagamento & Entrega eventos
    document.getElementById('paymentMethod').addEventListener('change', (e) => {
        const credContainer = document.getElementById('creditInstallmentsContainer');
        if (e.target.value === 'credito') {
            credContainer.style.display = 'block';
        } else {
            credContainer.style.display = 'none';
        }
        updateCartSummary();
    });

    document.getElementById('creditInstallments').addEventListener('change', updateCartSummary);

    document.getElementById('deliveryMethod').addEventListener('change', (e) => {
        const val = e.target.value;
        document.getElementById('fieldsCaldas').style.display = val === 'caldas' ? 'block' : 'none';
        document.getElementById('fieldsCorreios').style.display = val === 'correios' ? 'block' : 'none';
        document.getElementById('fieldsRetirada').style.display = val === 'retirada' ? 'block' : 'none';
    });

    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('checkoutWhatsappBtn').addEventListener('click', checkoutWhatsapp);
}

// Favoritos
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        gtag('event', 'favorito_remover', { product_id: id });
    } else {
        favorites.push(id);
        gtag('event', 'favorito_adicionar', { product_id: id });
    }
    localStorage.setItem('oliveira_favorites', JSON.stringify(favorites));
    updateCounters();
    renderCatalog(products);
    if (document.getElementById('favModal').classList.contains('active')) {
        openFavModal();
    }
}

function openFavModal() {
    const container = document.getElementById('favItemsList');
    container.innerHTML = '';
    const favProducts = products.filter(p => favorites.includes(p.id));

    if (favProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Nenhum favorito salvo.</p>';
    } else {
        favProducts.forEach(p => {
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${p.image}" style="width:40px; height:40px; object-fit:cover; border-radius:4px;">
                    <div class="cart-item-details">
                        <h4>${p.name}</h4>
                        <p>R$ ${p.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                </div>
                <button class="btn btn-small btn-primary" onclick="addToCart(${p.id}); document.getElementById('favModal').classList.remove('active');">Comprar</button>
            `;
            container.appendChild(row);
        });
    }
    document.getElementById('favModal').classList.add('active');
}

// Carrinho
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    gtag('event', 'adicionar_ao_carrinho', { product_id: id, product_name: product.name });
    saveCart();
    updateCounters();
    openCartModal();
}

function updateCartQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
            gtag('event', 'remover_do_carrinho', { product_id: id });
        }
        saveCart();
        updateCounters();
        openCartModal();
    }
}

function removeCartItem(id) {
    cart = cart.filter(i => i.id !== id);
    gtag('event', 'remover_do_carrinho', { product_id: id });
    saveCart();
    updateCounters();
    openCartModal();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCounters();
    openCartModal();
}

function saveCart() {
    localStorage.setItem('oliveira_cart', JSON.stringify(cart));
}

function updateCounters() {
    document.getElementById('cartCount').innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('favCount').innerText = favorites.length;
}

function openCartModal() {
    const container = document.getElementById('cartItemsList');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Seu carrinho está vazio.</p>';
    } else {
        cart.forEach(item => {
            const sub = item.price * item.quantity;
            const row = document.createElement('div');
            row.className = 'cart-item-row';
            row.innerHTML = `
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity} = <strong>R$ ${sub.toFixed(2).replace('.', ',')}</strong></p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeCartItem(${item.id})" style="color: #ff4d4d; border-color: #ff4d4d;">🗑️</button>
                </div>
            `;
            container.appendChild(row);
        });
    }

    // Informar benefício da roleta se houver
    const discContainer = document.getElementById('discountInfoContainer');
    const discRow = document.getElementById('discountRow');
    if (userBenefit && userBenefit.percentage > 0) {
        discContainer.innerHTML = `🎁 Benefício Ativo da Roleta: ${userBenefit.percentage}% de desconto (Aplicado apenas em produtos elegíveis, exceto alianças).`;
        discRow.style.display = 'block';
    } else {
        discContainer.innerHTML = '';
        discRow.style.display = 'none';
    }

    updateCartSummary();
    document.getElementById('cartModal').classList.add('active');
}

// Taxas e Cálculo exato de Crédito e Descontos
const creditRates = {
    1: 3.09, 2: 3.04, 3: 3.34, 4: 5.24, 5: 5.34,
    6: 5.44, 7: 6.59, 8: 6.78, 9: 7.47, 10: 8.15
};

function updateCartSummary() {
    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let discountAmount = 0;

    // Aplicar desconto da roleta se aplicável (Alianças não participam)
    if (userBenefit && userBenefit.percentage > 0) {
        let eligibleSubtotal = cart.reduce((acc, item) => {
            return item.isAlliance ? acc : acc + (item.price * item.quantity);
        }, 0);
        discountAmount = eligibleSubtotal * (userBenefit.percentage / 100);
    }

    let totalAfterDiscount = Math.max(0, subtotal - discountAmount);
    let finalTotal = totalAfterDiscount;

    const paymentMethod = document.getElementById('paymentMethod').value;
    if (paymentMethod === 'credito') {
        const installments = parseInt(document.getElementById('creditInstallments').value);
        const rate = creditRates[installments] || 0;
        finalTotal = totalAfterDiscount * (1 + (rate / 100));
    }

    document.getElementById('cartSubtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('cartDiscountVal').innerText = `- R$ ${discountAmount.toFixed(2).replace('.', ',')} (${userBenefit ? userBenefit.percentage + '%' : '0%'})`;
    document.getElementById('cartTotal').innerText = `R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
}

// Finalizar WhatsApp
function checkoutWhatsapp() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    gtag('event', 'inicio_checkout');

    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let discountAmount = 0;
    if (userBenefit && userBenefit.percentage > 0) {
        let eligibleSubtotal = cart.reduce((acc, item) => item.isAlliance ? acc : acc + (item.price * item.quantity), 0);
        discountAmount = eligibleSubtotal * (userBenefit.percentage / 100);
    }
    let totalAfterDiscount = Math.max(0, subtotal - discountAmount);

    const paymentMethod = document.getElementById('paymentMethod').value;
    let finalTotal = totalAfterDiscount;
    let installmentText = '';

    if (paymentMethod === 'credito') {
        const inst = document.getElementById('creditInstallments').value;
        const rate = creditRates[inst];
        finalTotal = totalAfterDiscount * (1 + (rate / 100));
        let installmentValue = finalTotal / parseInt(inst);
        installmentText = `${inst}x de R$ ${installmentValue.toFixed(2).replace('.', ',')} (Taxa de ${rate}%)`;
    }

    const deliveryMethod = document.getElementById('deliveryMethod').value;
    let deliveryText = '';
    if (deliveryMethod === 'caldas') {
        deliveryText = 'Entrega em Caldas Novas (Grátis, mesmo dia). Cliente enviará localização/endereço.';
    } else if (deliveryMethod === 'correios') {
        const cep = document.getElementById('cep').value;
        const rua = document.getElementById('rua').value;
        const quadra = document.getElementById('quadra').value;
        const lote = document.getElementById('lote').value;
        const num = document.getElementById('numero').value;
        deliveryText = `Correios - Endereço: Rua ${rua}, Q. ${quadra}, L. ${lote}, Nº ${num}, CEP ${cep}`;
    } else {
        deliveryText = 'Retirada Presencial';
    }

    let message = "Olá! Gostaria de finalizar meu pedido na Oliveira Pratas 925:\n\n";
    cart.forEach(item => {
        let itemSub = item.price * item.quantity;
        message += `• ${item.quantity}x ${item.name} - R$ ${item.price.toFixed(2).replace('.', ',')} un (Subtotal: R$ ${itemSub.toFixed(2).replace('.', ',')})\n`;
    });

    message += `\nSubtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (userBenefit && userBenefit.percentage > 0) {
        message += `\nDesconto Roleta (${userBenefit.percentage}%): - R$ ${discountAmount.toFixed(2).replace('.', ',')}`;
    }
    message += `\nForma de Pagamento: ${paymentMethod.toUpperCase()}`;
    if (installmentText) {
        message += `\nParcelamento: ${installmentText}`;
    }
    message += `\nTotal Final: R$ ${finalTotal.toFixed(2).replace('.', ',')}`;
    message += `\nForma de Entrega: ${deliveryText}`;

    gtag('event', 'finalizacao_pedido', { value: finalTotal });

    // Marcar benefício como reivindicado se usado
    if (userBenefit) {
        userBenefit.claimed = true;
        localStorage.setItem('oliveira_benefit', JSON.stringify(userBenefit));
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5564992145149?text=${encoded}`, '_blank');
}

// ================= JOGOS E ROLETA =================
function openGame(gameType) {
    gtag('event', 'inicio_jogo', { game: gameType });
    document.getElementById('gamesHub').style.display = 'none';
    const area = document.getElementById('gameContainerArea');
    area.style.display = 'block';
    const content = document.getElementById('gameActiveContent');
    content.innerHTML = '';

    if (gameType === 'memoria') renderMemoryGame(content);
    else if (gameType === 'quiz') renderQuizGame(content);
    else if (gameType === 'cacaPalavras') renderWordSearchGame(content);
    else if (gameType === 'desafioPrata') renderDesafioPrataGame(content);
    else if (gameType === 'roleta') renderRouletteGame(content);
}

function closeGameArea() {
    document.getElementById('gameContainerArea').style.display = 'none';
    document.getElementById('gamesHub').style.display = 'grid';
}

function finishGameAndRedirectToRoulette(gameName) {
    gtag('event', 'conclusao_jogo', { game: gameName });
    alert('Parabéns por concluir o jogo! Agora você ganhou o direito de girar a Roleta de Descontos para tentar conquistar seu benefício!');
    openGame('roleta');
}

// 1. Jogo da Memória
function renderMemoryGame(container) {
    container.innerHTML = `
        <h3>💎 Jogo da Memória</h3>
        <p>Encontre os pares usando fotos reais das nossas joias.</p>
        <div id="memoryBoard" style="display:grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px; margin: 20px auto;"></div>
        <button class="btn btn-primary" onclick="renderMemoryGame(document.getElementById('gameActiveContent'))">Reiniciar</button>
    `;
    const imagesList = ["Anel Coroa azul bb.jpg", "Anel de Prata 925 Solitário.jpg", "Brinco Redondo 12mm de Prata 925.png", "Pingente Coroa em Prata 925 (2).jpg"];
    let deck = [...imagesList, ...imagesList]
        .sort(() => Math.random() - 0.5)
        .map((img, idx) => ({ id: idx, img, flipped: false, matched: false }));

    const board = document.getElementById('memoryBoard');
    let firstCard = null;
    let lockBoard = false;
    let matchesCount = 0;

    deck.forEach((cardData, idx) => {
        const card = document.createElement('div5' || 'div');
        card.style.cssText = "background:var(--bg-card); height:80px; border:1px solid var(--border-color); border-radius:4px; display:flex; align-items:center; justify-content:center; cursor:pointer; overflow:hidden;";
        card.dataset.index = idx;
        card.innerHTML = `<span style="font-size:1.5rem;">❓</span>`;
        
        card.addEventListener('click', () => {
            if (lockBoard || cardData.flipped || cardData.matched) return;
            cardData.flipped = true;
            card.innerHTML = `<img src="${cardData.img}" style="width:100%; height:100%; object-fit:cover;">`;

            if (!firstCard) {
                firstCard = { cardData, card };
            } else {
                if (firstCard.cardData.img === cardData.img) {
                    firstCard.cardData.matched = true;
                    cardData.matched = true;
                    firstCard = null;
                    matchesCount++;
                    if (matchesCount === imagesList.length) {
                        setTimeout(() => finishGameAndRedirectToRoulette('Jogo da Memória'), 500);
                    }
                } else {
                    lockBoard = true;
                    setTimeout(() => {
                        firstCard.cardData.flipped = false;
                        cardData.flipped = false;
                        firstCard.card.innerHTML = `<span style="font-size:1.5rem;">❓</span>`;
                        card.innerHTML = `<span style="font-size:1.5rem;">❓</span>`;
                        firstCard = null;
                        lockBoard = false;
                    }, 1000);
                }
            }
        });
        board.appendChild(card);
    });
}

// 2. Quiz de Prata 925
function renderQuizGame(container) {
    const questions = [
        { q: "Qual o teor oficial da Prata Legítima mais comercializada na joalheria fina?", options: ["Prata 925", "Prata 800", "Prata de Lata", "Prata 500"], correct: 0 },
        { q: "O que é recomendado para limpar suas joias em prata com segurança?", options: ["Água sanitária", "Limpa Pratas específico", "Vinagre puro fervendo", "Pasta de dente abrasiva"], correct: 1 },
        { q: "A Prata 925 possui qual porcentagem de prata pura?", options: ["92,5%", "90%", "95%", "99,9%"], correct: 0 }
    ];
    let currentQ = 0;
    let score = 0;

    function showQ() {
        if (currentQ >= questions.length) {
            container.innerHTML = `<h3>Quiz Concluído!</h3><p>Você acertou ${score} de ${questions.length} perguntas.</p>`;
            setTimeout(() => finishGameAndRedirectToRoulette('Quiz de Prata 925'), 1500);
            return;
        }
        let qData = questions[currentQ];
        container.innerHTML = `
            <h3>925 — Quiz de Prata 925 (Questão ${currentQ + 1}/${questions.length})</h3>
            <p style="margin:15px 0; font-weight:bold;">${qData.q}</p>
            <div style="display:flex; flex-direction:column; gap:10px; max-width:400px; margin: 0 auto;">
                ${qData.options.map((opt, idx) => `<button class="btn btn-secondary" onclick="window.answerQuiz(${idx}, ${qData.correct})">${opt}</button>`).join('')}
            </div>
        `;
    }

    window.answerQuiz = (selected, correct) => {
        if (selected === correct) score++;
        currentQ++;
        showQ();
    };
    showQ();
}

// 3. Caça-palavras
function renderWordSearchGame(container) {
    container.innerHTML = `
        <h3>🔎 Caça-palavras</h3>
        <p>Encontre as palavras escondidas: PRATA, ANEL, BRINCO, COLAR, PULSEIRA, JOIA, PINGENTE, CORRENTE.</p>
        <div style="margin:20px 0; text-align:center;">
            <p style="color:var(--accent-silver); font-weight:bold;">Clique no botão abaixo para concluir o desafio e prosseguir para a Roleta!</p>
        </div>
        <button class="btn btn-primary" onclick="finishGameAndRedirectToRoulette('Caça-palavras')">Concluir Caça-palavras</button>
    `;
}

// 4. Desafio da Prata
function renderDesafioPrataGame(container) {
    container.innerHTML = `
        <h3>🥈 Desafio da Prata</h3>
        <p>Reconheça peças reais do nosso catálogo.</p>
        <div style="margin:20px 0; text-align:center;">
            <img src="Corrente Grumet 7mm - 80cm Prata 925.png" style="max-width:200px; height:150px; object-fit:cover; border-radius:4px; margin-bottom:15px;">
            <p style="font-weight:bold; margin-bottom:15px;">Qual é esta peça do catálogo?</p>
            <div style="display:flex; flex-direction:column; gap:10px; max-width:300px; margin:0 auto;">
                <button class="btn btn-secondary" onclick="finishGameAndRedirectToRoulette('Desafio da Prata')">Corrente Grumet 7mm</button>
                <button class="btn btn-secondary" onclick="finishGameAndRedirectToRoulette('Desafio da Prata')">Anel Solitário</button>
                <button class="btn btn-secondary" onclick="finishGameAndRedirectToRoulette('Desafio da Prata')">Brinco Redondo</button>
            </div>
        </div>
    `;
}

// 5. Roleta de Descontos
function renderRouletteGame(container) {
    if (userBenefit && userBenefit.percentage > 0) {
        container.innerHTML = `
            <h3>🎡 Roleta de Descontos</h3>
            <p>Você já conquistou o seu benefício de <strong>${userBenefit.percentage}%</strong>!</p>
            <p style="margin:20px 0;">O benefício já está vinculado ao seu carrinho de compras.</p>
            <button class="btn btn-primary" onclick="document.getElementById('cartModal').classList.add('active')">Ir para o Carrinho</button>
        `;
        return;
    }

    container.innerHTML = `
        <h3>🎡 Roleta de Descontos</h3>
        <p>Gire a roleta para conquistar seu benefício especial (1% a 10%)!</p>
        <div id="rouletteWheel" style="width:200px; height:200px; border-radius:50%; border:5px solid var(--accent-silver); margin:30px auto; display:flex; align-items:center; justify-content:center; font-size:1.5rem; font-weight:bold; background:conic-gradient(#333 0deg 36deg, #222 36deg 72deg, #333 72deg 108deg, #222 108deg 144deg, #333 144deg 180deg, #222 180deg 216deg, #333 216deg 252deg, #222 252deg 288deg, #333 288deg 324deg, #222 324deg 360deg);">
            🎁
        </div>
        <button class="btn btn-primary" id="spinBtn" onclick="spinRoulette()">GIRAR ROLETA</button>
        <div id="rouletteResult" style="margin-top:20px; font-size:1.2rem; font-weight:bold;"></div>
    `;
}

function spinRoulette() {
    gtag('event', 'inicio_roleta');
    const btn = document.getElementById('spinBtn');
    btn.disabled = true;
    const wheel = document.getElementById('rouletteWheel');
    
    // Sortear exatamente entre 1 e 10
    const slices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chosenPercentage = slices[Math.floor(Math.random() * slices.length)];
    
    // Animação visual real baseada em rotação
    let randomRotations = 360 * 5; 
    let sliceAngle = 36;
    let targetAngle = randomRotations + (chosenPercentage - 1) * sliceAngle + (sliceAngle / 2);

    wheel.style.transition = 'transform 3s cubic-bezier(0.15, 0.95, 0.15, 1)';
    wheel.style.transform = `rotate(${targetAngle}deg)`;

    setTimeout(() => {
        userBenefit = { percentage: chosenPercentage, claimed: false };
        localStorage.setItem('oliveira_benefit', JSON.stringify(userBenefit));
        gtag('event', 'conclusao_roleta', { percentage: chosenPercentage });

        document.getElementById('rouletteResult').innerHTML = `
            <div style="color:var(--accent-silver);">
                🎉 PARABÉNS! Você conquistou <strong>${chosenPercentage}%</strong> de desconto! 🎊
                <br><br>
                <button class="btn btn-primary" onclick="reclaimPrize()">🎁 REIVINDICAR MEU PRÊMIO</button>
            </div>
        `;
    }, 3100);
}

function reclaimPrize() {
    gtag('event', 'reivindicar_beneficio', { percentage: userBenefit.percentage });
    closeGameArea();
    document.getElementById('cartModal').classList.add('active');
    updateCartSummary();
}
