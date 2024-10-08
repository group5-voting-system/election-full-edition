

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("LOCAL_CANDIDATE")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("LOCAL_CANDIDATE").insert([
        {
          LIST_ID: 1,
          NATIONAL_ID: 2000000055,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 1,
          NATIONAL_ID: 2000000056,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 1,
          NATIONAL_ID: 2000000057,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 1,
          NATIONAL_ID: 2000000058,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 1,
          NATIONAL_ID: 2000000059,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 1,
          NATIONAL_ID: 2000000054,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 2,
          NATIONAL_ID: 2000000099,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 2,
          NATIONAL_ID: 2000000098,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 2,
          NATIONAL_ID: 2000000097,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 2,
          NATIONAL_ID: 2000000095,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 2,
          NATIONAL_ID: 2000000093,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 2,
          NATIONAL_ID: 2000000091,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 3,
          NATIONAL_ID: 2000000003,
          IS_APROVED: true,
          COUNT_OF_VOTES: 8,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 3,
          NATIONAL_ID: 2000000005,
          IS_APROVED: true,
          COUNT_OF_VOTES: 7,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 3,
          NATIONAL_ID: 2000000004,
          IS_APROVED: true,
          COUNT_OF_VOTES: 4,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 3,
          NATIONAL_ID: 2000000006,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 3,
          NATIONAL_ID: 2000000007,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 3,
          NATIONAL_ID: 2000000008,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 4,
          NATIONAL_ID: 2000000010,
          IS_APROVED: true,
          COUNT_OF_VOTES: 9,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 4,
          NATIONAL_ID: 2000000020,
          IS_APROVED: true,
          COUNT_OF_VOTES: 6,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 4,
          NATIONAL_ID: 2000000011,
          IS_APROVED: true,
          COUNT_OF_VOTES: 4,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 4,
          NATIONAL_ID: 2000000012,
          IS_APROVED: true,
          COUNT_OF_VOTES: 8,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 4,
          NATIONAL_ID: 2000000013,
          IS_APROVED: true,
          COUNT_OF_VOTES: 7,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 4,
          NATIONAL_ID: 2000000014,
          IS_APROVED: true,
          COUNT_OF_VOTES: 5,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000101,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000102,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000103,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000104,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000105,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000106,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000107,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000108,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000148,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 5,
          NATIONAL_ID: 2000000110,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسيحي",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000113,
          IS_APROVED: true,
          COUNT_OF_VOTES: 5,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000114,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000115,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000116,
          IS_APROVED: true,
          COUNT_OF_VOTES: 8,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000117,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000118,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000119,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000135,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "مسيحي",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000120,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        },
        {
          LIST_ID: 6,
          NATIONAL_ID: 2000000151,
          IS_APROVED: true,
          COUNT_OF_VOTES: 4,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000126,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000127,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000128,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000129,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000130,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000131,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000132,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000139,
          IS_APROVED: true,
          COUNT_OF_VOTES: 6,
          TYPE_OF_CHAIR: "مسيحي",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000133,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        },
        {
          LIST_ID: 7,
          NATIONAL_ID: 2000000152,
          IS_APROVED: true,
          COUNT_OF_VOTES: 5,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000140,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000141,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000142,
          IS_APROVED: true,
          COUNT_OF_VOTES: 4,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000143,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000144,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000145,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000146,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000147,
          IS_APROVED: true,
          COUNT_OF_VOTES: 9,
          TYPE_OF_CHAIR: "مسيحي",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000149,
          IS_APROVED: true,
          COUNT_OF_VOTES: 5,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        },
        {
          LIST_ID: 8,
          NATIONAL_ID: 2000000154,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 9,
          NATIONAL_ID: 2000000203,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 9,
          NATIONAL_ID: 2000000204,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 9,
          NATIONAL_ID: 2000000206,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 9,
          NATIONAL_ID: 2000000207,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 9,
          NATIONAL_ID: 2000000205,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 9,
          NATIONAL_ID: 2000000208,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        },
        {
          LIST_ID: 10,
          NATIONAL_ID: 2000000214,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 10,
          NATIONAL_ID: 2000000215,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 10,
          NATIONAL_ID: 2000000216,
          IS_APROVED: true,
          COUNT_OF_VOTES: 5,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 10,
          NATIONAL_ID: 2000000218,
          IS_APROVED: true,
          COUNT_OF_VOTES: 0,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 10,
          NATIONAL_ID: 2000000213,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 10,
          NATIONAL_ID: 2000000221,
          IS_APROVED: true,
          COUNT_OF_VOTES: 2,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        },
        {
          LIST_ID: 11,
          NATIONAL_ID: 2000000233,
          IS_APROVED: true,
          COUNT_OF_VOTES: 1,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 11,
          NATIONAL_ID: 2000000231,
          IS_APROVED: true,
          COUNT_OF_VOTES: 8,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 11,
          NATIONAL_ID: 2000000234,
          IS_APROVED: true,
          COUNT_OF_VOTES: 8,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 11,
          NATIONAL_ID: 2000000235,
          IS_APROVED: true,
          COUNT_OF_VOTES: 7,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 11,
          NATIONAL_ID: 2000000240,
          IS_APROVED: true,
          COUNT_OF_VOTES: 6,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 11,
          NATIONAL_ID: 2000000236,
          IS_APROVED: true,
          COUNT_OF_VOTES: 5,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        },
        {
          LIST_ID: 12,
          NATIONAL_ID: 2000000249,
          IS_APROVED: true,
          COUNT_OF_VOTES: 8,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 12,
          NATIONAL_ID: 2000000250,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 12,
          NATIONAL_ID: 2000000252,
          IS_APROVED: true,
          COUNT_OF_VOTES: 5,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 12,
          NATIONAL_ID: 2000000254,
          IS_APROVED: true,
          COUNT_OF_VOTES: 3,
          TYPE_OF_CHAIR: "مسلم",
        },
        {
          LIST_ID: 12,
          NATIONAL_ID: 2000000253,
          IS_APROVED: true,
          COUNT_OF_VOTES: 7,
          TYPE_OF_CHAIR: "كوتا",
        },
        {
          LIST_ID: 12,
          NATIONAL_ID: 2000000237,
          IS_APROVED: true,
          COUNT_OF_VOTES: 4,
          TYPE_OF_CHAIR: "شركسي / شيشاني",
        }
      ]);
    });
};
