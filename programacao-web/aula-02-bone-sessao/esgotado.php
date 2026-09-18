<?php
session_start();

// Pega o valor do estoque inicial que foi salvo na sessão pelo index.php.
// Isso evita deixar o número "20" fixo escrito no HTML/texto da página.
$estoqueInicial = $_SESSION['estoque_inicial'] ?? 20;
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Produto Esgotado — Código Fonte</title>
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <section class="pagina-mensagem">
    <h1>Produto Esgotado ❌</h1>
    <p>Todos os <?php echo $estoqueInicial; ?> bonés exclusivos já foram vendidos.</p>
    <p>Fique ligado nas próximas edições e novidades do Código Fonte!</p>
    <a href="index.php" class="btn">Voltar para a Página Inicial</a>
  </section>
</body>

</html>
