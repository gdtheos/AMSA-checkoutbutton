// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "amsa-checkoutbutton" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const checkout = vscode.commands.registerCommand('checkoutbutton.checkout', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		
		vscode.window.showInformationMessage('Checkout world!');
		let terminal = vscode.window.createTerminal("Code");
		terminal.show(true);
		let editor;
		let documentName;
		let docPath;
		if(!vscode.window.activeTextEditor){
			documentName = "Unable to check out: No valid text editor";
			docPath = "/";
		}
		else{
			editor = vscode.window.activeTextEditor;
			documentName = editor!.document.fileName;
			docPath = path.dirname(documentName);

		}
		
		terminal.sendText("cd '" + docPath + "'");
		terminal.sendText("git add --all\n\n");
		terminal.sendText("git commit -m 'dummy checkout message'");
	});

	context.subscriptions.push(checkout);
}

// This method is called when your extension is deactivated
export function deactivate() {}
