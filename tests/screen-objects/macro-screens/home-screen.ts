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
        };
        let macroElements  = driver.isAndroid ? macroElementsAndroid : macroElementsIOS;
        return macroElements;
    };

    /* ============ Methods =============== */

    async clickSkipBtn() {
        await this.waitAndClick((await this.getMacroElements()).skipBtn);
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

    async clickDeviceStateTab() {
        await this.waitAndClick((await this.getMacroElements()).deviceStateTab);
    }

    async clickAirPlaneMode() {
        await this.waitAndClick((await this.getMacroElements()).airPlaneMode);
    }
    
    async clickAirPlaneModeDisabledCheckbox() {
        await this.waitAndClick((await this.getMacroElements()).airPlaneModeDisabledCheckbox);
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
}
