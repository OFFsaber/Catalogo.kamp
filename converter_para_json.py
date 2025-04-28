import json

produtos = []
with open('Descrição Link da Imagem (URL).txt', encoding='utf-8') as f:
    next(f)  # pula o cabeçalho
    for linha in f:
        partes = linha.strip().split('\t')
        if len(partes) == 2:
            nome, imagem = partes
            produtos.append({"nome": nome, "imagem": imagem})

with open('produtos.json', 'w', encoding='utf-8') as f:
    json.dump(produtos, f, ensure_ascii=False, indent=2) 