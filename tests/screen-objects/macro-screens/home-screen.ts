import { MacroScreen } from './macro-screen';
import { copyRight } from '../../../test-data/copy-right-content';

export class MacroHomeScreen extends MacroScreen {
    constructor() {
        super();
    }

    async getMacroElements() {
        const macroElementsAndroid = {
            skipBtn: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/button_skip"]',
            navigateUpBtn: '//android.widget.ImageButton[@content-desc="Navigate up"]',
            addMacro: '//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/title" and @text="Add Macro"]',
            addTrigger: '~Add Trigger',
            addApplication: '//*[@text="Applications"]',
            installRemoveUpdateApplication: '//*[@text="App Install/Remove/Update"]',
            applicationRemoveCheckbox: '//*[@text="Application Removed"]',
            okButton: '//*[@text="OK"]',
            anyApplicationCheckbox: '//*[@text="Any Application"]',
            addAction: '//android.widget.ImageButton[@content-desc="Add Action"]',
            logginTab: '//*[@text="Logging"]',
            clearLogButton: '//*[@text="Clear Log"]',
            systemLogCheckbox: '//*[@text="System Log"]',
            addConstraints: '//android.widget.ImageButton[@content-desc="Add constraint"]',
            deviceStateTab: '//*[@text="Device State"]',
            airPlaneMode: '//*[@text="Airplane Mode"]',
            airPlaneModeDisabledCheckbox: '//*[@text="Airplane Mode Disabled"]',
            localVariableTab: '//*[@text="Local Variables"]',
            addLocalVariable: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/addVariableButton"]',
            variableNameText: '//*[@text="Enter variable name"]',
            variableTypeDropdown: '//android.widget.CheckedTextView[@resource-id="android:id/text1"]',
            variableTypeOption: (type: string) => `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${type}"]`,
            localVariableValue: '//*[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]',
            actionBlockMenu: '//*[@text="Action Blocks"]',
            addActionBlock: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/fab"]',
            actionBlockName: '//*[@text="Action block name"]',
            actionBlockDescription: '//*[@text="Enter Description"]',
            addInputVariableButton: '//*[@resource-id="com.arlosoft.macrodroid:id/addInputVariableButton"]',
            addOutVariableButton: '//*[@resource-id="com.arlosoft.macrodroid:id/addOutputVariableButton"]',
            inputCollapseExpandButton: `//*[@resource-id="com.arlosoft.macrodroid:id/inputCollapseExpandButton"]`,
            outputCollapseExpandButton: `//*[@resource-id="com.arlosoft.macrodroid:id/outputCollapseExpandButton"]`,
            acceptButton: `//*[@content-desc="Accept"]`,
            nameActionBlockAdded: `//*[@resource-id="com.arlosoft.macrodroid:id/name"]`,
            descriptionActionBlockAdded: `//*[@resource-id="com.arlosoft.macrodroid:id/description"]`,
            backButton: `//*[@resource-id="com.arlosoft.macrodroid:id/actionBack"]`,
            macroName: '//*[@text="Enter macro name"]',
            saveButton: '//*[@text="SAVE"]',
        };

        const macroElementsIOS = {
            skipBtn: '',
            navigateUpBtn: '',
            addMacro: '',
            addTrigger: '',
            addApplication: '',
            installRemoveUpdateApplication: '',
            applicationRemoveCheckbox: '',
            okButton: '',
            anyApplicationCheckbox: '',
            addAction: '',
            logginTab: '',
            clearLogButton: '',
            systemLogCheckbox: '',
            addConstraints: '',
            deviceStateTab: '',
            airPlaneMode: '',
            airPlaneModeDisabledCheckbox: '',
            localVariableTab: '',
            addLocalVariable: '',
            variableNameText: '',
            variableTypeDropdown: '',
            variableTypeOption: '',
            localVariableValue: '',
            actionBlockMenu: '',
            addActionBlock: '',
            actionBlockName: '',
            actionBlockDescription: '',
            addInputVariableButton: '',
            addOutVariableButton: '',
            inputCollapseExpandButton: '',
            outputCollapseExpandButton: '',
            acceptButton: '',
            nameActionBlockAdded: '',
            descriptionActionBlockAdded: '',
            backButton: '',
            macroName: '',
            saveButton: '',
        };
        let macroElements  = driver.isAndroid ? macroElementsAndroid : macroElementsIOS;
        return macroElements;
    };

    /* ============ Methods =============== */

    async clickSkipBtn() {
        await this.waitAndClick((await this.getMacroElements()).skipBtn);
    }

    async clickSaveBtn() {
        await this.waitAndClick((await this.getMacroElements()).saveButton);
    }

    async clickNavigateUpBtn() {
        await this.waitAndClick((await this.getMacroElements()).navigateUpBtn);
    }

    async clickAddMacro() {
        await this.waitAndClick((await this.getMacroElements()).addMacro);
    }

    async clickAddTrigger() {
        await this.waitAndClick((await this.getMacroElements()).addTrigger);
    }

    async clickAddApplication() {
        await this.waitAndClick((await this.getMacroElements()).addApplication);
    }

    async clickInstallRemoveUpdateApplication() {
        await this.waitAndClick((await this.getMacroElements()).installRemoveUpdateApplication);
    }

    async clickApplicationRemoveCheckbox() {
        await this.waitAndClick((await this.getMacroElements()).applicationRemoveCheckbox);
    }

    async clickOkButton() {
        await this.waitAndClick((await this.getMacroElements()).okButton);
    }

    async clickAnyApplicationCheckbox() {
        await this.waitAndClick((await this.getMacroElements()).anyApplicationCheckbox);
    }

    async clickAddAction() {
        await this.waitAndClick((await this.getMacroElements()).addAction);
    }

    async clickLoginTab() {
        await this.waitAndClick((await this.getMacroElements()).logginTab);
    }

    async clickClearLogButton() {
        await this.waitAndClick((await this.getMacroElements()).clearLogButton);
    }

    async clickSystemLogCheckbox() {
        await this.waitAndClick((await this.getMacroElements()).systemLogCheckbox);
    }

    async clickAddConstraints() {
        await this.waitAndClick((await this.getMacroElements()).addConstraints);
    }
    async clickBackButton() {
        await this.waitAndClick((await this.getMacroElements()).backButton);
    }

    async clickDeviceStateTab() {
        await this.waitAndClick((await this.getMacroElements()).deviceStateTab);
    }

    async clickAirPlaneMode() {
        await this.waitAndClick((await this.getMacroElements()).airPlaneMode);
    }
    async inputMacroName(name: string) {
        await this.waitAndFill((await this.getMacroElements()).macroName, name);
    }
    
    async clickAirPlaneModeDisabledCheckbox() {
        await this.waitAndClick((await this.getMacroElements()).airPlaneModeDisabledCheckbox);
    }

    async addLocalVariable(localVariable: string, typeOfVariable: string) {
        await this.waitAndClick((await this.getMacroElements()).localVariableTab);
        await this.waitAndClick((await this.getMacroElements()).addLocalVariable);
        await this.waitAndFill((await this.getMacroElements()).variableNameText, localVariable);
        await this.waitAndClick((await this.getMacroElements()).variableTypeDropdown);
        await this.waitAndClick((await this.getMacroElements()).variableTypeOption(typeOfVariable));
    }

    async clickActionBlock() {
        await this.waitAndClick((await this.getMacroElements()).actionBlockMenu);
    }

    async clickAddActionBlock() {
        await this.waitAndClick((await this.getMacroElements()).addActionBlock);
    }

    async inputActionBlockName(name: string) {
        await this.waitAndFill((await this.getMacroElements()).actionBlockName, name);
    }

    async inputActionBlockDescription(description: string) {
        await this.waitAndFill((await this.getMacroElements()).actionBlockDescription, description);
    }

    async addInputVariable(variable: string, typeOfVariable: string) {
        await this.waitAndClick((await this.getMacroElements()).addInputVariableButton);
        await this.waitAndFill((await this.getMacroElements()).variableNameText, variable);
        await this.waitAndClick((await this.getMacroElements()).variableTypeDropdown);
        await this.waitAndClick((await this.getMacroElements()).variableTypeOption(typeOfVariable));
    }

    async updateBooleanVariableInActionBlock(variable: string, value: string) {
        const variableNameLocator = `//*[@text="${variable}"]`;
        const valueBoolean = `//*[@text="${value}"]`;
        await this.waitAndClick(variableNameLocator);
        await this.waitAndClick(valueBoolean);
    }

    async addOutputVariable(variable: string, typeOfVariable: string) {
        await this.waitAndClick((await this.getMacroElements()).addOutVariableButton);
        await this.waitAndFill((await this.getMacroElements()).variableNameText, variable);
        await this.waitAndClick((await this.getMacroElements()).variableTypeDropdown);
        await this.waitAndClick((await this.getMacroElements()).variableTypeOption(typeOfVariable));
    }

    async clickInputCollapseExpandButton() {
        await this.waitAndClick((await this.getMacroElements()).inputCollapseExpandButton);
    }

    async clickAcceptButton() {
        await this.waitAndClick((await this.getMacroElements()).acceptButton);
    }

    async clickOutputCollapseExpandButton() {
        await this.waitAndClick((await this.getMacroElements()).outputCollapseExpandButton);
    }

    async updateStringVariable(variable: string, value: string) {
        const variableNameLocator = `//*[@text="${variable}"]`;
        const valueTextbox = `//*[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]`;
        await this.waitAndClick(variableNameLocator);
        await this.waitAndFill(valueTextbox, value);
    }

    /*==================Verification==============*/

    async verifyTriggerValue(value: string){
        expect(this.verifyTextContent((await this.getMacroElements()).applicationRemoveCheckbox, value));
    }

    async verifyActionValue(value: string){
        expect(this.verifyTextContent((await this.getMacroElements()).systemLogCheckbox, value));
    }

    async verifyConstraintValue(value: string){
        expect(this.verifyTextContent((await this.getMacroElements()).airPlaneModeDisabledCheckbox, value));
    }

    async verifyLocalVariableValue(value: string){
        expect(this.verifyTextContent((await this.getMacroElements()).localVariableValue, value));
    }

    async verifyActionBlockAdded(value: string, description: string){
        expect(this.verifyTextContent((await this.getMacroElements()).nameActionBlockAdded, value));
        expect(this.verifyTextContent((await this.getMacroElements()).descriptionActionBlockAdded, description));
    }
}
