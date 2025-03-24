import { MacroHomeScreen } from '../screen-objects/macro-screens/home-screen';
import { searchData } from '../../test-data/search-data';

describe('Macro application', () => {

    const macroHomeScreen = new MacroHomeScreen();

    before('Skip Macro Information', async () => {
        await macroHomeScreen.clickSkipBtn();
        await macroHomeScreen.clickNavigateUpBtn();
    })

    it('Verify that the user is able to add a macro', async () => {
        //Add and verify Macro
        await macroHomeScreen.clickAddMacro();
        await macroHomeScreen.clickAddTrigger();
        await macroHomeScreen.clickAddApplication();
        await macroHomeScreen.clickInstallRemoveUpdateApplication();
        await macroHomeScreen.clickApplicationRemoveCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.clickAnyApplicationCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyTriggerValue('Application Removed');
        //Add and verify Action
        await macroHomeScreen.clickAddAction();
        await macroHomeScreen.clickLoginTab();
        await macroHomeScreen.clickClearLogButton();
        await macroHomeScreen.clickSystemLogCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyActionValue('Clear Log');
        //Add and verify Constraint
        await macroHomeScreen.clickAddConstraints();
        await macroHomeScreen.clickDeviceStateTab();
        await macroHomeScreen.clickAirPlaneMode();
        await macroHomeScreen.clickAirPlaneModeDisabledCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyConstraintValue('Airplane Mode Disabled');
    });
});
