questions = Question.create([ {content: "Get the last element from the 'bonestorm' string.", quiz_id: 1, language_id: 1},
  {content: "a = 'Homer'\nb = ' Simpson'\nWhat does this expression evaluate to?\na + b", quiz_id: 1, language_id: 1},
  {content: "What does the following expression evaluate to?\n3 / 2", quiz_id: 1, language_id: 1},
  {content:"What does the following code print?\n
class Homer\n
  DOH = self\n
end\n
p Homer::DOH", quiz_id: 1, language_id: 1}, {content: "the_simpsons = {\n
  :homer => {\n
    :attributes => {\n
      :age => 39,\n
      :hair_color => :bald\n
    },\n
    :occupation => 'Nuclear Safety Inspector'\n
  },\n
  :marge => {\n
    :attributes => {\n
      :age => 36,\n
      :hair_color => :blue\n
    },\n
    :occupation => 'Housewife'\n
  },\n
  :ned => {\n
    :attributes => {\n
      :age => 60,\n
      :hair_color => :brown\n
    },\n
    :occupation => ['Owner of Leftorium', 'Owner of FlanCrest Enterprises', 'Volunteer Soup Kitchen worker']\n
  }\n
}\n Return the 2nd occupation of Ned in the_simpsons hash", quiz_id: 1, language_id: 1}, {content:"class Wisdom\n
  def name\n
    'Homer'\n
  end\n
end\n\n

class Wisdom\n
  def quote\n
    '# {name} says: Stupid risks make life worth living'\n
  end\n
end\n\n

Homer = Wisdom.new\n
p Homer.quote\n
What does the following code print?", quiz_id: 1, language_id: 1},
{content: "A farmer had 752 sheep and took one shot that got them all. How did he do it?", quiz_id: 1, language_id: 1},
{content: "What does the following expression return?\n 7/ 'ghost'", quiz_id: 2, language_id: 2},
{content: "What does the following expression return?\n var zombie;\n zombie === undefined", quiz_id: 2, language_id: 2},
{content: "What is the value of the spooky variable in the following expression?\n var spooky;", quiz_id: 2, language_id: 2},
{content:
"What does the following code print to the console?\n
var theShinning = {\n
  name: 'Johnny',\n
  JackTorrance: function () {\n
    return 'Heeeere’s ' + this.name + '!'\n
  }\n
}\n
theShinning.JackTorrance();", quiz_id: 2, language_id: 2}, {content: "var halloween = {\n
  z: 'You know, it’s Halloween… everyone’s entitled to one good scare, eh?'\n
}\n
console.log(halloween.hasOwnProperty('z'));", quiz_id: 2, language_id: 2}, {content: "function aNightmareOnElmStreet() {\n
  this.self = function () {\n
    return this;\n
  }\n
}\n
freddyKreuger = new aNightmareOnElmStreet();\n
console.log(freddyKreuger.self() === freddyKreuger);", quiz_id: 2, language_id: 2},
{content: "Is the sky blue?", quiz_id: 2, language_id: 2} ])

answers = Answer.create([ {answers: "'bonestorm'[-1]", question_id: 1}, {answers: "'Homer Simpson'", question_id: 2}, {answers: "1", question_id: 3}, {answers: "Homer", question_id: 4},
{answers: "the_simpsons[:ned][:occupation][1]", question_id: 5}, {answers: "'Homer says: Stupid risks make life worth living'", question_id: 6},
{answers: "He took a panoramic view", question_id: 7}, {answers: "panoramic view", question_id: 7}, {answers: "panoramic", question_id: 7}, {answers: "NaN", question_id: 8},
{answers: "True", question_id: 9}, {answers: "Undefined", question_id: 10}, {answers: "'Heeeere’s Johnny!'", question_id: 11}, {answers: "True", question_id: 12},
{answers: "No, it has no feelings", question_id: 13}, {answers: "No", question_id: 13} ])

#
# QuestionAnswer.create([ {question_id: 1, answer_id: 1}, {question_id: 2, answer_id: 2},
# {question_id: 3, answer_id: 3}, {question_id: 4, answer_id: 4}, {question_id: 5, answer_id: 5},
# {question_id: 6, answer_id: 6}, {question_id: 7, answer_id: 7}, {question_id: 7, answer_id: 8},
# {question_id: 7, answer_id: 9}, {question_id: 8, answer_id: 10}, {question_id: 9, answer_id: 11},
# {question_id: 10, answer_id: 12}, {question_id: 11, answer_id: 13}, {question_id: 12, answer_id: 14},
# {question_id: 13, answer_id: 15}, {question_id: 13, answer_id: 16} ])
