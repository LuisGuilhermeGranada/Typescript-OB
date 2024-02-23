import inquirer from 'inquirer';
export async function promptInput({ message, validateFunction, }) {
    const { resposta } = await inquirer.prompt({
        type: 'input',
        name: 'resposta',
        message: message,
        validate: validateFunction,
    });
    return resposta;
}
