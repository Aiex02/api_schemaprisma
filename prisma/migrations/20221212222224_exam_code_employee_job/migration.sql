-- CreateTable
CREATE TABLE "exams" (
    "id" TEXT NOT NULL,
    "exam_code" TEXT NOT NULL,
    "exam_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "employee_job" (
    "id" TEXT NOT NULL,
    "role_code" TEXT NOT NULL,
    "job_name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "exams_id_key" ON "exams"("id");

-- CreateIndex
CREATE UNIQUE INDEX "exams_exam_code_key" ON "exams"("exam_code");

-- CreateIndex
CREATE UNIQUE INDEX "employee_job_id_key" ON "employee_job"("id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_job_role_code_key" ON "employee_job"("role_code");
