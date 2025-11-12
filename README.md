# Controle de Abastecimento de Veículos — Angular

## Descrição
Aplicação Angular simples que simula o **registro de um abastecimento de veículo**, permitindo ao usuário informar:
- Tipo de combustível (Gasolina, Etanol ou Diesel);
- Valor do litro;
- Quantidade abastecida (em litros);
- Data do abastecimento.

Ao clicar em **"Calcular Total"**, o sistema:
1. Calcula o custo total do abastecimento;
2. Exibe as informações formatadas com **pipes** (`currency`, `number`, `date`);
3. Aplica **estilos dinâmicos (CSS)** conforme o tipo de combustível:
   - Gasolina → texto azul  
   - Etanol → texto verde  
   - Diesel → texto preto

Todas as informações só aparecem **após o clique no botão**, utilizando `*ngIf`.


## Como executar o projeto
### Instalar as dependências
```
npm install
```
### Rodar o projeto
```
ng serve
```
