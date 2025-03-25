import { MacroHomeScreen } from '../screen-objects/macro-screens/home-screen';
import { marcroTestData, typeOfVariable } from '../../test-data/search-data';

describe('Macro application', () => {
    const macroHomeScreen = new MacroHomeScreen();

    before('Skip Macro Information', async () => {
        await macroHomeScreen.clickSkipBtn();
        await macroHomeScreen.clickNavigateUpBtn();
    });

    it('Verify that the user is able to add a macro', async () => {
        // //Add and verify Macro
        await macroHomeScreen.clickAddMacro();
        await macroHomeScreen.inputMacroName(marcroTestData.actionBlockName);
        await macroHomeScreen.clickAddTrigger();
        await macroHomeScreen.clickAddApplication();
        await macroHomeScreen.clickInstallRemoveUpdateApplication();
        await macroHomeScreen.clickApplicationRemoveCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.clickAnyApplicationCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyTriggerValue(marcroTestData.triggerValue);
        //Add and verify Action
        await macroHomeScreen.clickAddAction();
        await macroHomeScreen.clickLoginTab();
        await macroHomeScreen.clickClearLogButton();
        await macroHomeScreen.clickSystemLogCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyActionValue(marcroTestData.actionValue);
        //Add and verify Constraint
        await macroHomeScreen.clickAddConstraints();
        await macroHomeScreen.clickDeviceStateTab();
        await macroHomeScreen.clickAirPlaneMode();
        await macroHomeScreen.clickAirPlaneModeDisabledCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyConstraintValue(marcroTestData.constraintValue);
        //Add and verify Local Variable
        await macroHomeScreen.addLocalVariable(marcroTestData.localVariable, typeOfVariable.interger);
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyLocalVariableValue(marcroTestData.localVariable);
        await macroHomeScreen.clickBackButton();
        await macroHomeScreen.clickSaveBtn();
    });

    it('Verify that the user is able to add an action blocks', async () => {
        //Add and update Input Variables
        await macroHomeScreen.clickActionBlock();
        await macroHomeScreen.clickAddActionBlock();
        await macroHomeScreen.inputActionBlockName(marcroTestData.actionBlockName);
        await macroHomeScreen.inputActionBlockDescription(marcroTestData.actionBlockDescription);
        await macroHomeScreen.addInputVariable(marcroTestData.inputVariable, typeOfVariable.boolean);
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.clickInputCollapseExpandButton();
        await macroHomeScreen.updateBooleanVariableInActionBlock(marcroTestData.inputVariable, 'True');
        await macroHomeScreen.clickOkButton();
        //Add and verify Action
        await macroHomeScreen.clickAddAction();
        await macroHomeScreen.clickLoginTab();
        await macroHomeScreen.clickClearLogButton();
        await macroHomeScreen.clickSystemLogCheckbox();
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.verifyActionValue(marcroTestData.localVariable);
        //Add and update Output Variables
        await macroHomeScreen.addOutputVariable(marcroTestData.outputVariable, typeOfVariable.string);
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.clickOutputCollapseExpandButton();
        await macroHomeScreen.updateStringVariable(marcroTestData.outputVariable, 'This is a testing string');
        await macroHomeScreen.clickOkButton();
        await macroHomeScreen.clickAcceptButton();
        await macroHomeScreen.verifyActionBlockAdded(marcroTestData.actionBlockName, marcroTestData.actionBlockDescription);
    });
});
