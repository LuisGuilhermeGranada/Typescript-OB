import inquirer from 'inquirer';

export async function promptInput({
  message,
  validateFunction,
}: {
  message: string;
  validateFunction?: (valor: string) => boolean | string;
}) {
  const { resposta } = await inquirer.prompt({
    type: 'input',
    name: 'resposta',
    message: message,
    validate: validateFunction,
  });

  return resposta;
}
