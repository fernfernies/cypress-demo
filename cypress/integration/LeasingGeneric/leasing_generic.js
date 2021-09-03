import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { question_messages } from "../../support/pages/question_page.js"
import { question_element } from "../../support/pages/question_page.js"
import { Cases } from "../../fixtures/testfile-1.json" 


const url = 'https://staging-rc-loan-lease-app.rabbitinternet.com/en/product/leasing/questions'

function mapStringToTestfile(name){
  const keys = Object.keys(Cases);
}

Given("User land to leasing question page", () => {
  cy.intercept('GET', "**/api/platform/leasing").as('pageload')
  cy.visit(url);
  // cy.readFile('cypress/fixtures/example.json').then(testdata => {
  //   testdata.forEach(data => {
  //       const carBrand = data.carBrand;

  //       cy.xpath(question_element.sel_carbrand).select(carBrand);

  //   });
  // });

});

When("User fill-in car infomation from {string}", (input) => {
  cy.wait('@pageload');

  const keys = Object.keys(Cases[input]);
  const values = Object.values(Cases[input]);
  for (let a = 0; a < keys.length; a += 1) {
    switch (values[a].field_type) {
      case "select":
        cy.get(`select[name="${keys[a]}"]`).select(values[a].value)
        break;
      case "button":
        let id = keys[a].slice(1);
        if (id === "btn-marketing-consent") {
          cy.get(`#${id}`).click();
          break;
        }
        let selector = `//*[@id="${id}"]//*[@type="button"]`;
        cy.xpath(selector).click();
        break;
      case "label":
        cy.get(`label[for="${keys[a]}"]`).click();
        break;
      case "text":
        cy.get(`input[name="${keys[a]}"]`).type(values[a].value)
        break;
      case "contain":
        let button = `//*[contains(text(),"${values[a].value}")]`
        cy.xpath(button).eq(0).parent().click({ force: true });
        break;
      default:
        cy.log("field_type is invalid")
        break;
    }
  }
})



//  
// 
//  
// 
// 






//   datatable.hashes().forEach(data => {
//   // cy.xpath(question_element.sel_carbrand).select(data.carBrand);
//   cy.xpath(question_element.sel_carmodel).select(data.carModel);
//   cy.xpath(question_element.sel_carmanufac).select(data.carYear);

//   cy.xpath(question_element.txt_hmborrow).click();
//   cy.xpath(question_element.txt_hmborrow).type(data.borrowAmnt);
//   cy.xpath(question_element.btn_next1).click();

//   if(data.debtFree == 'Yes'){
//     cy.xpath(question_element.rdo_debt_free_yes).click();
//   }else{
//     cy.xpath(question_element.rdo_debt_free_no).click();
//     if(data.repaidDebt == 'A1'){
//       cy.xpath(question_element.rdo_hmrepaid_a1).click();
//     }else if(data.repaidDebt == 'A2'){
//       cy.xpath(question_element.rdo_hmrepaid_a2).click();
//     }else{
//       cy.xpath(question_element.rdo_hmrepaid_a3).click();
//     }
//   }

//   if(data.latePayment == 'A1'){
//     cy.xpath(question_element.rdo_latepayment_a1).click();
//   }else if(data.latePayment == 'A2'){
//     cy.xpath(question_element.rdo_latepayment_a2).click();
//   }else if(data.latePayment == 'A3'){
//     cy.xpath(question_element.rdo_latepayment_a3).click();
//   }else{
//     cy.xpath(question_element.rdo_latepayment_a4).click();
//   }

//   cy.xpath(question_element.sel_province).select(data.province);
//   cy.xpath(question_element.sel_district).select(data.district);
//   cy.xpath(question_element.sel_zipcode).select(data.zipcode);

//   cy.xpath(question_element.sel_occupation).select(data.occupation);
//   cy.xpath(question_element.sel_income).select(data.income);
//   cy.xpath(question_element.txt_firstname).click();
//   cy.xpath(question_element.txt_firstname).type('Media');
//   cy.xpath(question_element.txt_lastname).click();
//   cy.xpath(question_element.txt_lastname).type('Testing');
//   cy.xpath(question_element.btn_next2).click();
//   cy.xpath(question_element.txt_phone).click();
//   cy.xpath(question_element.txt_phone).type('0900000000')
//   cy.xpath(question_element.txt_email).click();
//   cy.xpath(question_element.txt_email).type('abc@gm.com')
//   cy.xpath(question_element.btn_next3).click();
//   // cy.wait(2000)
//   // cy.scrollTo(0,-800)
//   // cy.wait(2000)
//   // cy.xpath(question_element.rdo_scb).click();
//   // cy.xpath(question_element.rdo_consent).click();
//   // cy.xpath(question_element.btn_proceed).click();
//   // cy.xpath(question_messages.lbl_thankyou_msg_en).should('be.visible');
//   cy.reload()

// });
// });

When("User fill-in personal information", (datatable) => {
  datatable.hashes().forEach(data => {
    cy.xpath(question_element.sel_occupation).select(data.occupation);
    cy.xpath(question_element.sel_income).select(data.income);
    cy.xpath(question_element.txt_firstname).click();
    cy.xpath(question_element.txt_firstname).type('Media')
    cy.xpath(question_element.txt_lastname).click();
    cy.xpath(question_element.txt_lastname).type('Testing')
    cy.xpath(question_element.btn_next2).click();
    cy.xpath(question_element.txt_phone).click();
    cy.xpath(question_element.txt_phone).type('0900000000')
    cy.xpath(question_element.txt_email).click();
    cy.xpath(question_element.txt_email).type('abc@gm.com')
  });

});