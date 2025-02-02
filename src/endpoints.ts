const baseURL = process.env.REACT_APP_API_URL;
export const urlWeather = `${baseURL}/WeatherForecast`;
export const urlLogin = `${baseURL}/api/User/Login`;
export const urlGetAllPatients = `${baseURL}/api/Patient`;
export const urlGetAllGeneralLookUp = `${baseURL}/api/Master/GetAllGeneralLookups`;
export const urlGetPatientDetail = `${baseURL}/api/Patient/GetPatientViewModel`;
export const urlAddNewPatient = `${baseURL}/api/Patient/AddNewPatient`;
export const urlAddNewLookup = `${baseURL}/api/Master/AddNewLookup`;
export const urlEditNewLookup = `${baseURL}/api/Master/EditNewLookup`;
export const urlSearchPatientRecord = `${baseURL}/api/Patient/SearchPatientRecord`;
export const urlUhidAutocomplete = `${baseURL}/api/Patient/AutocompleteUhid`;
export const urlEditPatientById = `${baseURL}/api/Patient/EditPatientById`;
export const urlGetAllVisitsToday = `${baseURL}/api/Encounter/GetAllVisitsToday`;
export const urlSearchVisitRecord = `${baseURL}/api/Encounter/SearchVisitRecord`;
export const urlSearchUHID = `${baseURL}/api/Patient/AutocompleteUhid`;
export const urlGetVisitDetailsWithPHeader = `${baseURL}/api/Encounter/GetVisitDetailsWithPHeader`;
export const urlGetDepartmentBasedOnPatitentType = `${baseURL}/api/Encounter/GetDepartmentBasedOnPatitentType`;
export const urlGetServiceLocationBasedonId = `${baseURL}/api/Encounter/GetServiceLocationBasedonId`;
export const urlGetProviderBasedOnDepartment = `${baseURL}/api/Encounter/GetProviderBasedOnDepartment`;
export const urlAddNewVisit = `${baseURL}/api/Encounter/SaveNewEncounter`;
export const urlAddNewService = `${baseURL}/api/Service/AddNewService`;
export const urlCreateNewService = `${baseURL}/api/Service/CreateService`;
export const urlGetServiceClassificationsForServiceGroup = `${baseURL}/api/Service/GetServiceClassificationsForServiceGroup`;
export const urlGetAllServices= `${baseURL}/api/Service/GetAllServices`;
export const urlGetAllVisitsForPatientId= `${baseURL}/api/Patient/GetAllVisitsForPatientId`;
export const urlGetPatientHeaderWithPatientIAndEncounterId= `${baseURL}/api/Patient/GetPatientHeaderWithPatientIdWithEncounterId`;
export const urlServiceAutocomplete= `${baseURL}/api/Patient/AutocompleteService`;
export const urlAddNewCharge= `${baseURL}/api/Billing/AddNewCharge`;
export const urlGetPatientAccountChargesWithPatientIdAndEncounterId= `${baseURL}/api/Billing/GetPatientAccountChargesWithPatientIdAndEncounterId`;
export const urlAddNewBill= `${baseURL}/api/Billing/AddNewBill`;
export const urlLoadTestForMapping= `${baseURL}/api/LabTestMaster/SubTestMappingIndex`;
export const urlSaveNewSubTestmap= `${baseURL}/api/LabTestMaster/SaveSubTestmap`;
export const urlLoadSubTestMapGridData= `${baseURL}/api/LabTestMaster/LoadSubTestMapGridData`;
export const urlDeleteSubTest= `${baseURL}/api/LabTestMaster/DeleteSubTest`;
export const urlSaveTestMethod= `${baseURL}/api/LabTestMaster/SaveTestMethod`;
export const urlDeleteTestMethod= `${baseURL}/api/LabTestMaster/DeleteTestMethod`;
export const urlLoadTestMethodGridData= `${baseURL}/api/LabTestMaster/LoadTestMethodGridData`;
export const urlLoadTestReferenceGrid= `${baseURL}/api/LabTestMaster/LoadTestReferenceGrid`;
export const urlSaveTestReference= `${baseURL}/api/LabTestMaster/SaveTestReference`;
export const urlEditTestRef= `${baseURL}/api/LabTestMaster/EditTestRef`;
export const urlTestReferencesIndex= `${baseURL}/api/LabTestMaster/TestReferencesIndex`;
export const urlDeleteTestRef= `${baseURL}/api/LabTestMaster/DeleteTestRef`;
export const urlSearchPatientsForLab= `${baseURL}/api/Laboratory/SearchPatientsForLab`;
export const urlGetLabNumbers= `${baseURL}/api/Laboratory/GetLabNumbers`;
export const urlSampleCollectionIndex= `${baseURL}/api/Laboratory/SampleCollectionIndex`; 
export const urlSaveSampleColResult=`${baseURL}/api/Laboratory/SaveSampleColResult`; 
export const urlLoadTestReferenceForResEntry=`${baseURL}/api/LabTestMaster/LoadTestReferenceForResEntry`; 
export const urlResultEntryIndex=`${baseURL}/api/Laboratory/ResultEntryIndex`; 
export const urlGetSelectedTestDataForResEntry=`${baseURL}/api/Laboratory/GetSelectedTestDataForResEntry`; 
export const urlSaveTestsResultEntry=`${baseURL}/api/Laboratory/SaveTestsResultEntry`; 
export const urlGetSelectedTestDataForResEntered=`${baseURL}/api/Laboratory/GetSelectedTestDataForResEntered`; 





