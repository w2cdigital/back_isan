import { container, delay } from 'tsyringe';

// import { IClinicRepository } from '../../modules/clinic/repositories/IClinicRepository';
// import { ClinicRepository } from '../../modules/clinic/repositories/implementation/ClinicRepository';
// import { ClinicAddressRepository } from '../../modules/clinic/repositories/implementation/ClinicAddressRepository';
// import { IClinicAddressRepository } from '../../modules/clinic/repositories/IClinicAddressRepository';
// import { IConfigPlanRepository } from '../../modules/clinic/repositories/IConfigPlanRepository';
// import { ConfigPlanRepository } from '../../modules/clinic/repositories/implementation/ConfigPlanRepository';
// import { CustomizeRepository } from '../../modules/clinic/repositories/implementation/CustomizeRepository';
// import { ICustomizeRepository } from '../../modules/clinic/repositories/ICustomizeRepository';
// import { ISystemRepository } from '../../modules/clinic/repositories/ISystemRepository';
// import { SystemRepository } from '../../modules/clinic/repositories/implementation/SystemRepository';
// import { IProcedureRepository } from '../../modules/clinic/repositories/IProcedureRepository';
// import { ProcedureRepository } from '../../modules/clinic/repositories/implementation/ProcedureRepository';
// import { ICovenantRepository } from '../../modules/clinic/repositories/ICovenantRepository';
// import { CovenantRepository } from '../../modules/clinic/repositories/implementation/CovenantRepository';
// import { IProfessionalRepository } from '../../modules/professional/repositories/IProfessionalRepository';
// import { ProfessionalRepository } from '../../modules/professional/repositories/implementation/ProfessionalRepository';
// import { ISpecialtyRepository } from '../../modules/professional/repositories/ISpecialtyRepository';
// import { SpecialtyRepository } from '../../modules/professional/repositories/implementation/SpecialtyRepository';
// import { ICouncilRepository } from '../../modules/professional/repositories/ICouncilRepository';
// import { CouncilRepository } from '../../modules/professional/repositories/implementation/CouncilRepository';
// import { ClinicProfessionalRepository } from '../../modules/professional/repositories/implementation/ClinicProfessionalRepository';
// import { IClinicProfessionalRepository } from '../../modules/professional/repositories/IClinicProfessionalRepository';
// import { IProcedureProfessionalRepository } from '../../modules/professional/repositories/IProcedureProfessionalRepository';
// import { ProcedureProfessionalRepository } from '../../modules/professional/repositories/implementation/ProcedureProfessionalRepository';
// import { IProcedureCovenantRepository } from '../../modules/professional/repositories/IProcedureCovenantRepository';
// import { ProcedureCovenantRepository } from '../../modules/professional/repositories/implementation/ProcedureCovenantRepository';
// import { IDayScheduleRepository } from '../../modules/schedule/repositories/IDayScheduleRepository';
// import { DayScheduleRepository } from '../../modules/schedule/repositories/implementation/DayScheduleRepository';
// import { IHourScheduleRepository } from '../../modules/schedule/repositories/IHourScheduleRepository';
// import { HourScheduleRepository } from '../../modules/schedule/repositories/implementation/HourScheduleRepository';
// import { IClientRepository } from '../../modules/client/repositories/IClientRepository';
// import { ClientRepository } from '../../modules/client/repositories/implementation/ClientRepository';
// import { IClientAddressRepository } from '../../modules/client/repositories/IClientAddressRepository';
// import { ClientAddressRepository } from '../../modules/client/repositories/implementation/ClientAddressRepository';
// import { AppointmentRepository } from '../../modules/appointment/repositories/implementation/AppointmentRepository';
// import { IAppointmentRepository } from '../../modules/appointment/repositories/IAppointmentRepository';
// import { ITemplateWhatsappRepository } from '../../modules/clinic/repositories/ITemplateWhatsappRepository';
// import { TemplateWhatsappRepository } from '../../modules/clinic/repositories/implementation/TemplateWhatsappRepository';
// import { ITemplateEmailRepository } from '../../modules/clinic/repositories/ITemplateEmailRepository';
// import { TemplateEmailRepository } from '../../modules/clinic/repositories/implementation/TemplateEmailRepository';
// import { BucketStorage, IBucketStorage } from '../upload_buckets/BucketStorage';
// import { IRevenueRepository } from '../../modules/financial/repositories/IRevenueRepository';
// import { RevenueRepository } from '../../modules/financial/repositories/implementation/RevenueRepository';
// import { IBankAccountRepository } from '../../modules/financial/repositories/IBankAccountRepository';
// import { BankAccountRepository } from '../../modules/financial/repositories/implementation/BankAccountRepository';
// import { IOrganizationUnitRepository } from '../../modules/financial/repositories/IOrganizationUnitRepository';
// import { OrganizationUnitRepository } from '../../modules/financial/repositories/implementation/OrganizationUnitRepository';
// import { IPaymentMethodsRepository } from '../../modules/financial/repositories/IPaymentMethodsRepository';
// import { PaymentMethodsRepository } from '../../modules/financial/repositories/implementation/PaymentMethodsRepository';
// import { IPlanAccountRepository } from '../../modules/financial/repositories/IPlanAccountRepository';
// import { PlanAccountRepository } from '../../modules/financial/repositories/implementation/PlanAccountRepository';
// import { ReceiverRepository } from '../../modules/financial/repositories/implementation/ReceiverRepository';
// import { IReceiverRepository } from '../../modules/financial/repositories/IReceiverRepository';
// import { ISupplierRepository } from '../../modules/financial/repositories/ISupplierRepository';
// import { SupplierRepository } from '../../modules/financial/repositories/implementation/SupplierRepository';
// import { IServiceRevenueRepository } from '../../modules/financial/repositories/IServiceRevenueRepository';
// import { ServiceRevenueRepository } from '../../modules/financial/repositories/implementation/ServiceRevenueRepository';
// import { IUserRepository } from '../../modules/user/repositories/IUserRepository';
// import { UserRepository } from '../../modules/user/repositories/implementation/UserRepository';
// import { IUserTypeRepository } from '../../modules/user/repositories/IUserTypeRepository';
// import { UserTypeRepository } from '../../modules/user/repositories/implementation/UserTypeRepository';
// import { ITypeUserTypeRepository } from '../../modules/user/repositories/ITypeUserTypeRepository';
// import { TypeUserTypeRepository } from '../../modules/user/repositories/implementation/TypeUserTypeRepository';
// import { MedicalRecordRepository } from '../../modules/medical_record/repositories/implementation/MedicalRecordRepository';
// import { IMedicalRecordRepository } from '../../modules/medical_record/repositories/IMedicalRecordRepository';
// import { ICertificateRepository } from '../../modules/medical_record/repositories/ICertificateRepository';
// import { CertificateRepository } from '../../modules/medical_record/repositories/implementation/CertificateRepository';
// import { ITreatmentRepository } from '../../modules/medical_record/repositories/ITreatmentRepository';
// import { TreatmentRepository } from '../../modules/medical_record/repositories/implementation/TreatmentRepository';
// import { ITreatmentReturnRepository } from '../../modules/medical_record/repositories/ITreatmentReturnRepository';
// import { TreatmentReturnRepository } from '../../modules/medical_record/repositories/implementation/TreatmentReturnRepository';
// import { ICertificateTypeRepository } from '../../modules/medical_record/repositories/ICertificateTypeRepository';
// import { CertificateTypeRepository } from '../../modules/medical_record/repositories/implementation/CertificateTypeRepository';
// import { IPrescriptionRepository } from '../../modules/medical_record/repositories/IPrescriptionRepository';
// import { PrescriptionRepository } from '../../modules/medical_record/repositories/implementation/PrescriptionRepository';
// import { ExamRepository } from '../../modules/medical_record/repositories/implementation/ExamRepository';
// import { IExamRepository } from '../../modules/medical_record/repositories/IExamRepository';
// import { IImcRepository } from '../../modules/medical_record/repositories/IImcRepository';
// import { ImcRepository } from '../../modules/medical_record/repositories/implementation/ImcRepository';
// import { IHistoryClientRepository } from '../../modules/medical_record/repositories/IHistoryClientRepository';
// import { HistoryClientRepository } from '../../modules/medical_record/repositories/implementation/HistoryClientRepository';
// import { IPhysiotherapyAssessmentRepository } from '../../modules/medical_record/repositories/IPhysiotherapyAssessmentRepository';
// import { PhysiotherapyAssessmentRepository } from '../../modules/medical_record/repositories/implementation/PhysiotherapyAssessmentRepository';
// import { IPhysiotherapyClinicalExamRepository } from '../../modules/medical_record/repositories/IPhysiotherapyClinicalExamRepository';
// import { PhysiotherapyClinicalExamRepository } from '../../modules/medical_record/repositories/implementation/PhysiotherapyClinicalExamRepository';
// import { IPhysiotherapyTherapeuticPlanRepository } from '../../modules/medical_record/repositories/IPhysiotherapyTherapeuticPlanRepository';
// import { PhysiotherapyTherapeuticPlanRepository } from '../../modules/medical_record/repositories/implementation/PhysiotherapyTherapeuticPlanRepository';
// import { IPsicoSocialRepository } from '../../modules/medical_record/repositories/IPsicoSocialRepository';
// import { PsicoSocialRepository } from '../../modules/medical_record/repositories/implementation/PsicoSocialRepository';
// import { HistoryFamilyRepository } from '../../modules/medical_record/repositories/implementation/HistoryFamilyRepository';
// import { IHistoryFamilyRepository } from '../../modules/medical_record/repositories/IHistoryFamilyRepository';
// import { IHistoryClinicRepository } from '../../modules/medical_record/repositories/IHistoryClinicRepository';
// import { HistoryClinicRepository } from '../../modules/medical_record/repositories/implementation/HistoryClinicRepository';
// import { ExpenseRepository } from '../../modules/financial/repositories/implementation/ExpenseRepository';
// import { IExpenseRepository } from '../../modules/financial/repositories/IExpenseRepository';
// import { IServiceExpenseRepository } from '../../modules/financial/repositories/IServiceExpenseRepository';
// import { ServiceExpenseRepository } from '../../modules/financial/repositories/implementation/ServiceExpenseRepository';
// import { UserProfessionalRepository } from '../../modules/user/repositories/implementation/UserProfessionalRepository';
// import { IUserProfessionalRepository } from '../../modules/user/repositories/IUserProfessionalRepository';
// import { IUserProfessionalClinicRepository } from '../../modules/user/repositories/IUserProfessionalClinicRepository';
// import { userProfessionalClinicRepository } from '../../modules/user/repositories/implementation/UserProfessionalClinicRepository';
// import { ITransferRepository } from '../../modules/financial/repositories/ITransferRepository';
// import { TransferRepository } from '../../modules/financial/repositories/implementation/TransferRepository';
// import { IAppointmentProcedureRepository } from '../../modules/appointment/repositories/IAppointmentProcedureRepository';
// import { AppointmentProcedureRepository } from '../../modules/appointment/repositories/implementation/AppointmentProcedureRepository';
// import { IBulaRepository } from '../../modules/bula/repositories/IBulaRepository';
// import { BulaRepository } from '../../modules/bula/repositories/implementation/BulaRepository';
// import { IKinshipRepository } from '../../modules/client/repositories/IKinshipRepository';
// import { KinshipRepository } from '../../modules/client/repositories/implementation/KinshipRepository';
// import { SpecialtyProfessionalRepository } from '../../modules/professional/repositories/implementation/SpecialtyProfessionalRepository';
// import { ISpecialtyProfessionalRepository } from '../../modules/professional/repositories/ISpecialtyProfessionalRepository';
// import { IProfessionalAddressRepository } from '../../modules/professional/repositories/IProfessionalAddressRepository';
// import { ProfessionalAddressRepository } from '../../modules/professional/repositories/implementation/ProfessionalAddressRepository';
// import { ITemplateEmailMedtechRepository } from '../../modules/medtech/repositories/ITemplateEmailMedtechRepository';
// import { TemplateEmailMedtechRepository } from '../../modules/medtech/repositories/implementation/TemplateEmailMedtechRepository';
// import { IAppointmentPaymentMethodsRepository } from '../../modules/appointment/repositories/IAppointmentPaymentMethodsRepository';
// import { AppointmentPaymentMethodsRepository } from '../../modules/appointment/repositories/implementation/AppointmentPaymentMethodsRepository';
// import { ITicketRepository } from '../../modules/clinic/repositories/ITicketRepository';
// import { TicketRepository } from '../../modules/clinic/repositories/implementation/TicketRepository';
// import { ITicketCategoryRepository } from '../../modules/clinic/repositories/ITicketCategoryRepository';
// import { TicketCategoryRepository } from '../../modules/clinic/repositories/implementation/TicketCategoryRepository';
// import { IPilatesRepository } from '../../modules/medical_record/repositories/IPilatesRepository';
// import { PilatesRepository } from '../../modules/medical_record/repositories/implementation/PilatesRepository';
// import { IPilatesEquipmentRepository } from '../../modules/medical_record/repositories/IPilatesEquipmentRepository';
// import { PilatesEquipmentRepository } from '../../modules/medical_record/repositories/implementation/PilatesEquipmentRepository';
// import { IPilatesDescriptionRepository } from '../../modules/medical_record/repositories/IPilatesDescriptionRepository';
// import { PilatesDescriptionRepository } from '../../modules/medical_record/repositories/implementation/PilatesDescriptionRepository';
// import { IPilatesExerciseRepository } from '../../modules/medical_record/repositories/IPilatesExerciseRepository';
// import { PilatesExerciseRepository } from '../../modules/medical_record/repositories/implementation/PilatesExerciseRepository';
// import { IPsychologyRepository } from '../../modules/medical_record/repositories/IPsychologyRepository';
// import { PsychologyRepository } from '../../modules/medical_record/repositories/implementation/PsychologyRepository';
// import { IPsychologyCurrentHistoryRepository } from '../../modules/medical_record/repositories/IPsychologyCurrentHistoryRepository';
// import { PsychologyCurrentHistoryRepository } from '../../modules/medical_record/repositories/implementation/PsychologyCurrentHistoryRepository';
// import { IPsychologyFamilyHistoryRepository } from '../../modules/medical_record/repositories/IPsychologyFamilyHistoryRepository';
// import { PsychologyFamilyHistoryRepository } from '../../modules/medical_record/repositories/implementation/PsychologyFamilyHistoryRepository';
// import { IPsychologyObservationsRepository } from '../../modules/medical_record/repositories/IPsychologyObservationsRepository';
// import { PsychologyObservationsRepository } from '../../modules/medical_record/repositories/implementation/PsychologyObservationsRepository';
// import { IPsychologyPersonalHistoryRepository } from '../../modules/medical_record/repositories/IPsychologyPersonalHistoryRepository';
// import { PsychologyPersonalHistoryRepository } from '../../modules/medical_record/repositories/implementation/PsychologyPersonalHistoryRepository';
// import { IPsychologyPsychicExamRepository } from '../../modules/medical_record/repositories/IPsychologyPsychicExamRepository';
// import { PsychologyPsychicExamRepository } from '../../modules/medical_record/repositories/implementation/PsychologyPsychicExamRepository';
// import { IPlanRepository } from '../../modules/clinic/repositories/IPlanRepository';
// import { PlanRepository } from '../../modules/clinic/repositories/implementation/PlanRepository';

// container.registerSingleton<IClinicRepository>(
//   'ClinicRepository',
//   delay(() => ClinicRepository),
// );

// container.registerSingleton<IClinicAddressRepository>(
//   'ClinicAddressRepository',
//   delay(() => ClinicAddressRepository),
// );

// container.registerSingleton<IConfigPlanRepository>(
//   'ConfigPlanRepository',
//   delay(() => ConfigPlanRepository),
// );

// container.registerSingleton<ICustomizeRepository>(
//   'CustomizeRepository',
//   delay(() => CustomizeRepository),
// );

// container.registerSingleton<ISystemRepository>(
//   'SystemRepository',
//   delay(() => SystemRepository),
// );

// container.registerSingleton<IProfessionalRepository>(
//   'ProfessionalRepository',
//   delay(() => ProfessionalRepository),
// );

// container.registerSingleton<ISpecialtyProfessionalRepository>(
//   'SpecialtyProfessionalRepository',
//   delay(() => SpecialtyProfessionalRepository),
// );

// container.registerSingleton<ICovenantRepository>(
//   'CovenantRepository',
//   delay(() => CovenantRepository),
// );

// container.registerSingleton<IProcedureRepository>(
//   'ProcedureRepository',
//   delay(() => ProcedureRepository),
// );

// container.registerSingleton<ITicketCategoryRepository>(
//   'TicketCategoryRepository',
//   delay(() => TicketCategoryRepository),
// );

// container.registerSingleton<ITicketRepository>(
//   'TicketRepository',
//   delay(() => TicketRepository),
// );

// container.registerSingleton<ISpecialtyRepository>(
//   'SpecialtyRepository',
//   delay(() => SpecialtyRepository),
// );

// container.registerSingleton<ICouncilRepository>(
//   'CouncilRepository',
//   delay(() => CouncilRepository),
// );

// container.registerSingleton<IClinicProfessionalRepository>(
//   'ClinicProfessionalRepository',
//   delay(() => ClinicProfessionalRepository),
// );

// container.registerSingleton<IProcedureProfessionalRepository>(
//   'ProcedureProfessionalRepository',
//   delay(() => ProcedureProfessionalRepository),
// );

// container.registerSingleton<IProcedureCovenantRepository>(
//   'ProcedureCovenantRepository',
//   delay(() => ProcedureCovenantRepository),
// );

// container.registerSingleton<IDayScheduleRepository>(
//   'DayScheduleRepository',
//   delay(() => DayScheduleRepository),
// );

// container.registerSingleton<IHourScheduleRepository>(
//   'HourScheduleRepository',
//   delay(() => HourScheduleRepository),
// );

// container.registerSingleton<IClientRepository>(
//   'ClientRepository',
//   delay(() => ClientRepository),
// );

// container.registerSingleton<IClientAddressRepository>(
//   'ClientAddressRepository',
//   delay(() => ClientAddressRepository),
// );

// container.registerSingleton<IAppointmentRepository>(
//   'AppointmentRepository',
//   delay(() => AppointmentRepository),
// );

// container.registerSingleton<ITemplateWhatsappRepository>(
//   'TemplateWhatsappRepository',
//   delay(() => TemplateWhatsappRepository),
// );

// container.registerSingleton<ITemplateEmailRepository>(
//   'TemplateEmailRepository',
//   delay(() => TemplateEmailRepository),
// );

// container.registerSingleton<IBucketStorage>(
//   'BucketStorage',
//   delay(() => BucketStorage),
// );

// container.registerSingleton<IRevenueRepository>(
//   'RevenueRepository',
//   delay(() => RevenueRepository),
// );

// container.registerSingleton<IBankAccountRepository>(
//   'BankAccountRepository',
//   delay(() => BankAccountRepository),
// );

// container.registerSingleton<IOrganizationUnitRepository>(
//   'OrganizationUnitRepository',
//   delay(() => OrganizationUnitRepository),
// );

// container.registerSingleton<IPaymentMethodsRepository>(
//   'PaymentMethodsRepository',
//   delay(() => PaymentMethodsRepository),
// );

// container.registerSingleton<IPlanAccountRepository>(
//   'PlanAccountRepository',
//   delay(() => PlanAccountRepository),
// );

// container.registerSingleton<IPlanRepository>(
//   'PlanRepository',
//   delay(() => PlanRepository),
// );

// container.registerSingleton<IReceiverRepository>(
//   'ReceiverRepository',
//   delay(() => ReceiverRepository),
// );

// container.registerSingleton<ISupplierRepository>(
//   'SupplierRepository',
//   delay(() => SupplierRepository),
// );

// container.registerSingleton<IServiceRevenueRepository>(
//   'ServiceRevenueRepository',
//   delay(() => ServiceRevenueRepository),
// );

// container.registerSingleton<IServiceExpenseRepository>(
//   'ServiceExpenseRepository',
//   delay(() => ServiceExpenseRepository),
// );

// container.registerSingleton<IUserRepository>(
//   'UserRepository',
//   delay(() => UserRepository),
// );

// container.registerSingleton<IUserProfessionalRepository>(
//   'UserProfessionalRepository',
//   delay(() => UserProfessionalRepository),
// );

// container.registerSingleton<IUserProfessionalClinicRepository>(
//   'UserProfessionalClinicRepository',
//   delay(() => userProfessionalClinicRepository),
// );

// container.registerSingleton<IUserTypeRepository>(
//   'UserTypeRepository',
//   delay(() => UserTypeRepository),
// );

// container.registerSingleton<ITypeUserTypeRepository>(
//   'TypeUserTypeRepository',
//   delay(() => TypeUserTypeRepository),
// );

// container.registerSingleton<IMedicalRecordRepository>(
//   'MedicalRecordRepository',
//   delay(() => MedicalRecordRepository),
// );

// container.registerSingleton<ITreatmentRepository>(
//   'TreatmentRepository',
//   delay(() => TreatmentRepository),
// );

// container.registerSingleton<ITreatmentReturnRepository>(
//   'TreatmentReturnRepository',
//   delay(() => TreatmentReturnRepository),
// );

// container.registerSingleton<ICertificateRepository>(
//   'CertificateRepository',
//   delay(() => CertificateRepository),
// );

// container.registerSingleton<ICertificateTypeRepository>(
//   'CertificateTypeRepository',
//   delay(() => CertificateTypeRepository),
// );

// container.registerSingleton<IAppointmentRepository>(
//   'AppointmentRepository',
//   delay(() => AppointmentRepository),
// );

// container.registerSingleton<IAppointmentPaymentMethodsRepository>(
//   'AppointmentPaymentMethodsRepository',
//   delay(() => AppointmentPaymentMethodsRepository),
// );

// container.registerSingleton<IPrescriptionRepository>(
//   'PrescriptionRepository',
//   delay(() => PrescriptionRepository),
// );

// container.registerSingleton<IExamRepository>(
//   'ExamRepository',
//   delay(() => ExamRepository),
// );

// container.registerSingleton<IExpenseRepository>(
//   'ExpenseRepository',
//   delay(() => ExpenseRepository),
// );

// container.registerSingleton<IImcRepository>(
//   'ImcRepository',
//   delay(() => ImcRepository),
// );

// container.registerSingleton<IHistoryClientRepository>(
//   'HistoryClientRepository',
//   delay(() => HistoryClientRepository),
// );

// container.registerSingleton<IHistoryClinicRepository>(
//   'HistoryClinicRepository',
//   delay(() => HistoryClinicRepository),
// );

// container.registerSingleton<IHistoryFamilyRepository>(
//   'HistoryFamilyRepository',
//   delay(() => HistoryFamilyRepository),
// );

// container.registerSingleton<IPsicoSocialRepository>(
//   'PsicoSocialRepository',
//   delay(() => PsicoSocialRepository),
// );

// container.registerSingleton<IPhysiotherapyAssessmentRepository>(
//   'PhysiotherapyAssessmentRepository',
//   delay(() => PhysiotherapyAssessmentRepository),
// );

// container.registerSingleton<IPhysiotherapyClinicalExamRepository>(
//   'PhysiotherapyClinicalExamRepository',
//   delay(() => PhysiotherapyClinicalExamRepository),
// );

// container.registerSingleton<IPhysiotherapyTherapeuticPlanRepository>(
//   'PhysiotherapyTherapeuticPlanRepository',
//   delay(() => PhysiotherapyTherapeuticPlanRepository),
// );

// container.registerSingleton<ITransferRepository>(
//   'TransferRepository',
//   delay(() => TransferRepository),
// );

// container.registerSingleton<IAppointmentProcedureRepository>(
//   'AppointmentProcedureRepository',
//   delay(() => AppointmentProcedureRepository),
// );

// container.registerSingleton<IBulaRepository>(
//   'BulaRepository',
//   delay(() => BulaRepository),
// );

// container.registerSingleton<IKinshipRepository>(
//   'KinshipRepository',
//   delay(() => KinshipRepository),
// );

// container.registerSingleton<IProfessionalAddressRepository>(
//   'ProfessionalAddressRepository',
//   delay(() => ProfessionalAddressRepository),
// );

// container.registerSingleton<ITemplateEmailMedtechRepository>(
//   'TemplateEmailMedtechRepository',
//   delay(() => TemplateEmailMedtechRepository),
// );

// container.registerSingleton<IPilatesRepository>(
//   'PilatesRepository',
//   delay(() => PilatesRepository),
// );

// container.registerSingleton<IPilatesEquipmentRepository>(
//   'PilatesEquipmentRepository',
//   delay(() => PilatesEquipmentRepository),
// );

// container.registerSingleton<IPilatesDescriptionRepository>(
//   'PilatesDescriptionRepository',
//   delay(() => PilatesDescriptionRepository),
// );

// container.registerSingleton<IPilatesExerciseRepository>(
//   'PilatesExerciseRepository',
//   delay(() => PilatesExerciseRepository),
// );

// container.registerSingleton<IPsychologyRepository>(
//   'PsychologyRepository',
//   delay(() => PsychologyRepository),
// );

// container.registerSingleton<IPsychologyCurrentHistoryRepository>(
//   'PsychologyCurrentHistoryRepository',
//   delay(() => PsychologyCurrentHistoryRepository),
// );

// container.registerSingleton<IPsychologyFamilyHistoryRepository>(
//   'PsychologyFamilyHistoryRepository',
//   delay(() => PsychologyFamilyHistoryRepository),
// );

// container.registerSingleton<IPsychologyObservationsRepository>(
//   'PsychologyObservationsRepository',
//   delay(() => PsychologyObservationsRepository),
// );

// container.registerSingleton<IPsychologyPersonalHistoryRepository>(
//   'PsychologyPersonalHistoryRepository',
//   delay(() => PsychologyPersonalHistoryRepository),
// );

// container.registerSingleton<IPsychologyPsychicExamRepository>(
//   'PsychologyPsychicExamRepository',
//   delay(() => PsychologyPsychicExamRepository),
// );
