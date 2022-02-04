import { deepClone } from "../src/deep-cloning"

const student = {
  id: 1,
  name: "Jack",
  items: ["pen", "rubber", "textbook", "tablet"],
  examDate: new Date(),
  classmates: [
    {
      id: 2,
      name: "John",
      items: null,
      examDate: new Date()
    },
    {
      id: 2,
      name: "James",
      items: ["pencil", "laptop"],
      exams: [new Date(), new Date()]
    }
  ],
  university: null
}

describe("Deep Clone", () => {
  const clonedStudentData = deepClone(student)

  it("Equal", () => {
    expect(clonedStudentData).toStrictEqual(student)
  })

  const clonedStudentData2 = deepClone(clonedStudentData)
  clonedStudentData2.name = "Jeff"

  it("Not equal", () => {
    expect(clonedStudentData2).not.toStrictEqual(student)
  })
})

describe("Deep Clone - without deep clone", () => {
  const student2 = deepClone(student)
  const studentData = student2
  studentData.name = "Jeff"

  it("Equal", () => {
    expect(studentData).toStrictEqual(student2)
  })
})

describe("Deep Clone - test null", () => {
  const emptyStudentData = null
  const studentData = deepClone(emptyStudentData)

  it("Equal", () => {
    expect(studentData).toBeNull()
  })
})

describe("Deep Clone - test string", () => {
  const name = "Jack"
  const data = deepClone(name)

  it("Equal", () => {
    expect(data).toEqual(name)
  })
})

describe("Deep Clone - test date", () => {
  const examDate = new Date()
  const date = deepClone(examDate)

  it("Equal", () => {
    expect(date.toString()).toEqual(examDate.toString())
  })
})
