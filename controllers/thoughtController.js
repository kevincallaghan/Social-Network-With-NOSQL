//used class mini project for examples
const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughtsStuff = await Thought.find();
      res.json(thoughtsStuff);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSingleThought(req, res) {
    try {
      const singleThought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!singleThought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(singleThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought

  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      const thoughtUser = await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: newThought._id } },
        { runValidators: true, new: true }
      );
      res.json(newThought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!deletedThought) { delete
        res.status(404).json({ message: 'No thought with that ID' });
      }

      const thoughtUser = await User.findOneAndUpdate(
        { username: deletedThought.username },
        { $pull: { thoughts: deletedThought._id } },
        { runValidators: true, new: true }
      );

      res.json({ message: 'Thought deleted!' });

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      );

      if (!updatedThought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //TODO Need to add and remove reaction

};
