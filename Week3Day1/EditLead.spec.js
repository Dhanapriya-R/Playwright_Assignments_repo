"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
(0, test_1.test)("CreateLead", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var title, Expectedtitle, editedcmpyname;
    var page = _b.page;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, page.goto("http://leaftaps.com/opentaps/control/main")
                //Login details
            ];
            case 1:
                _c.sent();
                //Login details
                return [4 /*yield*/, page.locator("#username").fill("Demosalesmanager")];
            case 2:
                //Login details
                _c.sent();
                return [4 /*yield*/, page.locator("#password").fill("crmsfa")];
            case 3:
                _c.sent();
                return [4 /*yield*/, page.locator("//input[@class='decorativeSubmit']").click()];
            case 4:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(2000)];
            case 5:
                _c.sent();
                return [4 /*yield*/, page.title()];
            case 6:
                title = _c.sent();
                console.log(title);
                Expectedtitle = "Leaftaps - TestLeaf Automation Platform";
                (0, test_1.expect)(title).toBe(Expectedtitle);
                console.log("Login Sucessful");
                return [4 /*yield*/, page.locator("//div[@class='crmsfa']").click()
                    //Find Lead
                ];
            case 7:
                _c.sent();
                //Find Lead
                return [4 /*yield*/, page.locator("//a[text()='Leads']").click()];
            case 8:
                //Find Lead
                _c.sent();
                return [4 /*yield*/, page.locator("//a[text()='Find Leads']").click()];
            case 9:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(2000)];
            case 10:
                _c.sent();
                return [4 /*yield*/, page.locator("(//input[@name='firstName'])[1]").fill("Ram")];
            case 11:
                _c.sent();
                return [4 /*yield*/, page.locator("(//input[@name='lastName'])[1]").fill("Prasadh")];
            case 12:
                _c.sent();
                return [4 /*yield*/, page.locator("//button[text()='Find Leads']").click()];
            case 13:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(2000)];
            case 14:
                _c.sent();
                return [4 /*yield*/, page.locator("(//a[@class='linktext'])[1]").click()];
            case 15:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(2000)
                    //Edit Lead
                ];
            case 16:
                _c.sent();
                //Edit Lead
                return [4 /*yield*/, page.locator("//a[text()='Edit']").click()];
            case 17:
                //Edit Lead
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(2000)];
            case 18:
                _c.sent();
                return [4 /*yield*/, page.locator("(//input[@name='companyName'])[1]").fill("Noise")];
            case 19:
                _c.sent();
                return [4 /*yield*/, page.locator("#updateLeadForm_annualRevenue").fill("20,000")];
            case 20:
                _c.sent();
                return [4 /*yield*/, page.locator("#updateLeadForm_description").fill("Edited the Lead data")];
            case 21:
                _c.sent();
                return [4 /*yield*/, page.locator("(//input[@name='submitButton'])[1]").click()];
            case 22:
                _c.sent();
                return [4 /*yield*/, page.waitForTimeout(2000)
                    //assertion
                ];
            case 23:
                _c.sent();
                return [4 /*yield*/, page.locator("#viewLead_companyName_sp").textContent()];
            case 24:
                editedcmpyname = _c.sent();
                (0, test_1.expect)(editedcmpyname).toContain("Noise");
                console.log("Data edited sucessfully");
                return [4 /*yield*/, page.waitForTimeout(2000)];
            case 25:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
